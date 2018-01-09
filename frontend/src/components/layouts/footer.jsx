import React from "react";

// Semantic UI
import { Divider, Container } from "semantic-ui-react";

// Components

const AppFooter = props => {
  return (
    <div className="App-footer">
      <Divider />
      <Container>
        <p>このページでは以下のデータを利用しています。</p>
        <ul>
          <li>
            京都市営地下鉄時刻表，京都市，クリエイティブ・コモンズ・ライセンス表示4.0国際<br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://creativecommons.org/licenses/by/4.0/deed.ja"
            >
              http://creativecommons.org/licenses/by/4.0/deed.ja
            </a>{" "}
            (link is external)
          </li>
          <li>
            京都市営地下鉄各駅位置データ<br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.odekakemap.com/station/"
            >
              http://www.odekakemap.com/station/
            </a>{" "}
            (link is external)
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default AppFooter;
