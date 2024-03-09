// get comment form
async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    if (comment_text) {
        const response = await fetch(`/api/comments`, {
            methd: 'POST',
            body: JSON.stringify({ comment_text, post_id }),
            headers: { 'Content-Type': 'application/json' }
        });
    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
    }
}
// get comment text and post-id const

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
// event listener submit
