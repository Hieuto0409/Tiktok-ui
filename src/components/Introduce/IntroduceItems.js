import Introduce from './Introduce';
import style from './style.module.css';

function IntroduceItems() {
    return (
        <div>
            <div className={style.Container}>
                <Introduce label={'Giới thiệu'} />
                <Introduce label={'Bảng tin'} />
                <Introduce label={'Liên hệ'} />
                <Introduce label={'Sự nghiệp'} />
            </div>
            <div className={style.Container}>
                <Introduce label={'TikTok Good'} />
                <Introduce label={'Quảng cáo'} />
                <Introduce label={'Developers'} />
                <Introduce label={'Minh bạch'} />
                <Introduce label={'TikTok Rewards'} />
                <Introduce label={'TikTok Embeds'} />
            </div>
            <div className={style.Container}>
                <Introduce label={'Trợ giúp'} />
                <Introduce label={'An toàn'} />
                <Introduce label={'Điều khoản'} />
                <Introduce label={'Quyền riêng tư'} />
                <Introduce label={'Cổng thông tin Tác giả'} />
                <Introduce label={'Hướng dẫn Cộng đồng'} />
            </div>
            <p className={style.endItems}>@2023 TikTok</p>
        </div>
    );
}
export default IntroduceItems;
