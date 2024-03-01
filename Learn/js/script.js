import { client } from "./client.js";

const render = (posts) => {
  // console.log(posts);
  const stripHtmlTag=(html)=>html.replace(/<[^>]*>?/gm,'')
  const postEl = document.querySelector(".posts");
  postEl.innerHTML = `<div class="row g-3">
    ${posts
      .map(({ title, excerpt }) => {
        return `
                <div class="col-6 col-lg-4">
                    <div class="border p-3">
                        <h2><a href="#" class="text-decoration-none">${stripHtmlTag(title)}</a></h2>
                        <p>${stripHtmlTag(excerpt)}
                        </p>
                    </div>
                </div>
    `;
      })
      .join("")}
</div>`;
};
const getPosts = async (query={}) => {
  const queryString=new URLSearchParams(query).toString()
  const { data: posts } = await client.get(`/posts?${queryString}`);
  render(posts);
};
getPosts({
  _sort:"id",
  // _order:"desc"
});

