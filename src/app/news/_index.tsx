import Post from '../../components/post';

import news from '../../json/news.json';

export default function News() {
   return (
      <div>
         <h3>News</h3>
         <div>
            {news.slice(news.length - 3).map(obj => (
               <Post
                  title={obj.title}
                  date={obj.date}
                  desc={obj.desc}
               />
            ))}
         </div>
      </div>
   );
}
