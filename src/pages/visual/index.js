import styles from "./visual.module.scss";

export const Visual = () => {
  return (
    <div className={styles.visual}>
      <div className="container">
        <h1>視覺作品集</h1>
        <p>
        這個作品集展示設計和創意能力，同時反映我的個人風格，每一個作品都有我對設計的熱情和追求。
        並且注重細節和實用性，力求讓每一個設計都具有美感和功能性。。
        </p>
        
        <div className={styles.grid}>

        <div className={styles.card}>
		    <img src="./images/visual01.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                      <h3>蜂與鳥</h3>
                        <p>營造出柔和、輕盈的氛圍，與酒體有相呼應，凸顯商品特色。<br/>
			                    <a href="Visual/1">View More</a> 
                            </p> 
                    </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual02.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                      <h3>三隻猴子</h3>
                        <p>夏日森林和靈動的猴子，營造出了一種自然、活潑、有趣的氛圍。<br/>
                        <a href="Visual/2">View More</a> 
                            </p> 
                      </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual03.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>甜柑橘氣泡酒</h3>
                        <p>在炎炎夏日里感受到一絲涼爽，提升整個夏天的美好感受。<br/>
                        <a href="Visual/3">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual04.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>西班牙醜醜熱紅酒</h3>
                        <p>夏日飲用新哲學 清新沁涼好滋味。不同於傳統夏日飲料的美妙口感。<br/>
                        <a href="Visual/4">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual05.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>查理斯香檳經典系列</h3>
                        <p>散發著獨特的氣息和風味，充滿奢華和精緻的品味世界。<br/>
                        <a href="Visual/5">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual06.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>幾米聯名酒款</h3>
                        <p>溫馨的氛圍，在忙碌的生活中獲得一絲絲的溫暖和安慰。<br/>
                        <a href="Visual/6">View More</a> 
                            </p> 
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>          

       
    );
};

         