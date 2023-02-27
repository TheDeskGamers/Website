import news from '../../assets/json/news.json';

import Post from '../../components/post';

export default function News() {
   return (
      <div>
         <h3>News</h3>
         <div>
            {news.slice(news.length - 3).map(obj => (
               <Post
                  title={obj.title}
                  date={obj.date}
                  link={obj.link}
                  desc={obj.desc}
               />
            ))}
         </div>
      </div>
   );
}
