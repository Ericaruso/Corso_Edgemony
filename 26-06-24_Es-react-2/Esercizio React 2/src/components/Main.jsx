import posts from "./data.json"

function Main() {

    return (
        <main>
            <div className="container">
                <div className="main-grid">
                    <Sidebar />
                    <section id="post-list" className="post-list">
                        {posts.map((post, index) => (
                            <PostItem
                                key={index}
                                title={post.title}
                                content={post.body}
                                userId={post.userId}
                            />
                        ))}
                    </section>
                </div>
            </div>
        </main>
    );
}

function Sidebar() {
    return (<aside>Sidebar
        <ul>
            <li>
                <a href="#">Link 1</a>
            </li>
            <li>
                <a href="#">Link 2</a>
            </li>
            <li>
                <a href="#">Link 3</a>
            </li>
        </ul>
    </aside>);
}



function PostItem({ title, content, userId }) {

    return (
        <article className="article hover:animate-background">
            <div className="article-content">
                <h3 className="title">{title}</h3>
                <div className="tags">
                    <span className="tag">{userId}</span>
                    <span className="tag">{content}</span>
                </div>
                <div><small>by User {userId}</small></div>
                <p>{content}</p>
            </div>
        </article>
    );
}



export { Main };