
const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "ri23ajudf221",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "IHr01Vx9_VkWXXfIBAw-7Z2GfZYOz9p5M4cWyGOsjqQ"
});

console.log(client);

//Home page link to other pages
const about=document.getElementById('about');
about.onclick = function () { 
    window.location.href = "about.html";  
 }
const proverb = document.getElementById('proverb');
proverb.onclick = function () {
    window.location.href = "proverb.html";
}
const quotes = document.getElementById('quote');
quotes.onclick = function () {
    window.location.href = "quotes.html";
}
const skill = document.getElementById('skill');
skill.onclick = function () {
    window.location.href = "skill.html";
}
const contact = document.getElementById('contact');
contact.onclick = function () {
    window.location.href = "contact.html";
}
//Home page link to other pages end

        const myRequest=new Request("./json.json");
        async function getData(){


            let contentful= await client.getEntries({
                content_type: 'cheque'
            });
            //console.log(contentful);
               // .then((response) => console.log(response.items))
               // .catch(console.error)

        const response = await fetch(myRequest)
const data= await response.json();

let myPost=contentful.items;
 myPost=myPost.map(items=>{
     console.log(items);
     const { wikiTitle,wikiText} = items.fields;
     //const {id}=items.sys;
     document.getElementById('wiki-head').innerHTML = wikiTitle;
     document.getElementById('wiki-body').innerHTML = wikiText;
     const wikiImage ="items.fields.wikiImage.fields.file.url";
     document.getElementById('wikiImage').innerHTML=wikiImage;
    /* const{id}=items.sys;
     const myImage=items.fields.sys;
     return {blogTitle,blogText,id,myImage}*/
   
     
 })
            
         /* const {blogTitle,blogText,myImage}=data.data[0];
            document.getElementById('inspiration-head').textContent=blogTitle;
            document.getElementById('inspiration-body').textContent = blogText;
            document.getElementById('myImage').src= myImage;
            const { wikiTitle, wikiText,wikiImage } = data.data[1];
            document.getElementById('wiki-head').textContent = wikiTitle;
            document.getElementById('wiki-body').textContent = wikiText;
            document.getElementById('wikiImage').src = wikiImage;*/
        }
getData();


