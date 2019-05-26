import React, { FC } from 'react';

const SiteInformation: FC = () => (
  <div className="contents">
    <div className="container">
      <article>
        <h1>サイト情報</h1>
        <p>
          2016年3月に著書が一人旅で行ったタイのスポットを紹介しているサイトです。
        </p>
        <table>
          <tr>
            <th>サイト名</th>
            <td>タイ旅行記~ただひたすらに寺院を巡って~</td>
          </tr>
          <tr>
            <th>開設日</th>
            <td>2019年5月4日</td>
          </tr>
        </table>
      </article>
    </div>
  </div>
);

export default SiteInformation;
