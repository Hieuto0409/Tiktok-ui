import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import AccountItems from '~/components/AccountItems';
import { SearchIcon } from '~/components/icon';
import { Wrapper } from '~/components/poper';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/SearchServies';
import style from './search.module.scss';

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [results, setResults] = useState('');
    const [OnBlur, setOnBlur] = useState(true);
    const [OutLine, setOutLine] = useState(style.noOutline);
    const [Display, setDisplay] = useState(style.DisplayBlock);
    const [Loading, setLoading] = useState(false);
    const Input = useRef();

    const debounce = useDebounce(results, 500);
    const InputResult = (value) => {
        setResults(value);
        setDisplay(style.DisplayBlock);
    };
    const HandleClose = () => {
        setOnBlur(false);
    };
    const HandleClick = () => {
        setDisplay(style.DisplayNone);
    };
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);
    return (
        <div className={'containerTippy'}>
            <Tippy
                interactive
                visible={OnBlur && searchResult.length > 0}
                onClickOutside={HandleClose}
                render={(attrs) => (
                    <div className={clsx(style.ResultSearch, Display)} tabIndex="-1" {...attrs} onClick={HandleClick}>
                        <Wrapper>
                            <h1 className={style.AccountHeader}>Accounts</h1>
                            {searchResult.map((values) => (
                                <AccountItems id={values.id} data={values} key={values.id} />
                            ))}
                            <span className={style.textContainer}>
                                <span className={style.bottomInput}>View all results for "{results}"</span>
                            </span>
                        </Wrapper>
                    </div>
                )}
            >
                <div className={clsx(style.searchContainer)}>
                    <span
                        className={clsx(style.SearchBtn, OutLine)}
                        onClick={() => {
                            Input.current.focus();
                            setOutLine(style.outline);
                        }}
                        onBlur={() => setOutLine(style.noOutline)}
                    >
                        <input
                            onChange={(e) => InputResult(e.target.value)}
                            placeholder="Search accounts and videos"
                            className={clsx(style.HeaderSearch)}
                            value={results}
                            ref={Input}
                            onFocus={() => setOnBlur(true)}
                        />
                        {!!results && !Loading && (
                            <span
                                className={style.close}
                                onClick={() => {
                                    setResults('');
                                    Input.current.focus();
                                    setOnBlur(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </span>
                        )}
                        {Loading && (
                            <span className={style.loading}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </span>
                        )}
                        <span className={style.separate}>|</span>
                        <button className={clsx(style.iconSearch)}>
                            <SearchIcon className={style.SearchIcon} />
                        </button>
                    </span>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
