import React from "react";
import scss from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/id");
  };
  return (
    <div className={scss.center}>
      <div className={scss.container}>
        <p>Tất cả ứng dụng</p>
        <div className={scss.list}>
          <div className={scss.card}>
            <div className={scss.alt}>
              <div className={scss.thumb}>
                <div className={scss.crash}>
                  <img src="./assets/icons/crash.png" alt="" />
                </div>
                <span>Đăng kiểm</span>
              </div>
            </div>
          </div>
          <div className={scss.card}>
            <div className={scss.alt}>
              <div className={scss.thumb}>
                <div className={scss.crash}>
                  <img src="./assets/icons/receipt.png" alt="" />
                </div>
                <span>Hóa đơn</span>
              </div>
            </div>
          </div>
          <div className={scss.card}>
            <div className={scss.alt}>
              <div className={scss.thumb}>
                <div className={scss.crash}>
                  <img src="./assets/icons/accessibility.png" alt="" />
                </div>
                <span>Khách hàng</span>
              </div>
            </div>
          </div>
          <div className={scss.card}>
            <div className={scss.alt}>
              <div className={scss.thumb}>
                <div className={scss.crash}>
                  <img
                    style={{ background: "#5D5AED" }}
                    src="./assets/icons/list_alt.png"
                    alt=""
                  />
                </div>
                <span>Quản lý</span>
              </div>
            </div>
          </div>
          <div className={scss.card}>
            <div className={scss.alt}>
              <div className={scss.thumb}>
                <div className={scss.crash}>
                  <img
                    style={{ background: "#E32F2F" }}
                    src="./assets/icons/subtitles.png"
                    alt=""
                  />
                </div>
                <span>Tin tức</span>
              </div>
            </div>
          </div>
          <div className={scss.card}>
            <div className={scss.alt}>
              <div className={scss.thumb}>
                <div className={scss.crash}>
                  <img
                    style={{ background: "#E32F2F", left: "-25px" }}
                    src="./assets/icons/support.png"
                    alt=""
                  />
                </div>
                <p>Chăm sóc khách hàng</p>
              </div>
            </div>
          </div>
        </div>
        <div className={scss.leftmenu}>
          <div className={scss.title}>
            <div className={scss.topmenu}>
              <div className={scss.back}>
                <div className={scss.logo}>
                  <img src="./assets/images/image 4.png" alt="" />
                </div>
                <div className={scss.drive}></div>
                <div className={scss.menu}>
                  <div className={scss.item} onClick={() =>handleClick()}>
                    <div className={scss.group}>
                      <div className={scss.content}>
                        <div className={scss.widget}>
                          <img src="./assets/icons/widgets.png" alt="" />
                          <p>Tổng quát</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={scss.item} onClick={() =>handleClick()}>
                    <div className={scss.group}>
                      <div className={scss.content}>
                        <div className={scss.widget}>
                          <img src="./assets/icons/calendar.png" alt="" />
                          <p>Lịch hẹn</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={scss.item} onClick={() =>handleClick()}>
                    <div className={scss.group}>
                      <div className={scss.content}>
                        <div className={scss.widget}>
                          <img src="./assets/icons/notifications.png" alt="" />
                          <p>Thông báo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={scss.item} onClick={() =>handleClick()}>
                    <div className={scss.group}>
                      <div className={scss.content}>
                        <div className={scss.widget}>
                          <img src="./assets/icons/subtitles.png" alt="" />
                          <p>Tin tức</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={scss.item} onClick={() =>handleClick()}>
                    <div className={scss.group}>
                      <div className={scss.content}>
                        <div className={scss.widget}>
                          <img src="./assets/icons/settings.png" alt="" />
                          <p>Thiết lập</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={scss.drive}></div>
              </div>
            </div>
            <div className={scss.avatar}>
              <img src="./assets/images/image 5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
