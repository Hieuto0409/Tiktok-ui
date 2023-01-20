import PropTypes from 'prop-types';
import style from './style.module.css';
import clsx from 'clsx';
import AccountSizeBar from './AccountItemsSizeBar';
function ListAccountSizeBar({ label }) {
    return (
        <div className={clsx(style.Container)}>
            <div>
                <p className={style.Label}>{label}</p>
            </div>
            <AccountSizeBar
                UserName={'Tô Quang Hiếu'}
                NickName={'@toquanghieu123'}
                ImgSrc={'https://upload.wikimedia.org/wikipedia/commons/9/93/Jisoo_in_2022.jpg'}
                NumFl={'10M'}
                NumLike={'101M'}
            />
            <AccountSizeBar
                UserName={'Tô Quang Hiếu'}
                NickName={'@toquanghieu123'}
                ImgSrc={'https://upload.wikimedia.org/wikipedia/commons/9/93/Jisoo_in_2022.jpg'}
                NumFl={'10M'}
                NumLike={'101M'}
            />
            <AccountSizeBar
                UserName={'Tô Quang Hiếu'}
                NickName={'@toquanghieu123'}
                ImgSrc={'https://upload.wikimedia.org/wikipedia/commons/9/93/Jisoo_in_2022.jpg'}
                NumFl={'10M'}
                NumLike={'101M'}
            />
            <p className={style.SeeMore}>See more</p>
            <div className={style.border}></div>
        </div>
    );
}
ListAccountSizeBar.prototypes = {
    label: PropTypes.string.isRequired,
};
export default ListAccountSizeBar;
