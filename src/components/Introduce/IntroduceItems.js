import Introduce from './Introduce';
import style from './style.module.css';

function IntroduceItems() {
    return (
        <div className={style.Container}>
            <Introduce label={'hieu'} />
        </div>
    );
}
export default IntroduceItems;
