let title = document.querySelector(".title")
let addBlog = document.querySelector(".add")

addBlog.addEventListener("click", () => {
    addsBlog("hey")
})



function addsBlog(content){
    let newBlog = document.createElement("div")
    newBlog.classList = "blog"
    newBlog.textContent=content
    document.body.append(newBlog)
}