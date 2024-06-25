function Main() {
    const posts = [
        {
            title:
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            content:
                "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
            userId: 1,
        },
        {
            title:
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            content:
                "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
            userId: 1,
        },
        {
            title:
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            content:
                "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
            userId: 1,
        },

    ]
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
                                content={post.content}
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
        <article>
            <h3>{title}</h3>
            <div><small>by User {userId}</small></div>
            <p>{content}</p>
        </article>
    );
}

export { Main };