const form = document.querySelector("form")
fileInput = document.querySelector(".file-input")
progressArea = document.querySelector(".progress-area")
uploadedArea = document.querySelector(".uploaded-area")
progressBar = document.querySelector(".progress")
percent = document.querySelector(".size")
name1 = document.querySelector('#name1')
name2 = document.querySelector('#name2')

form.addEventListener('click',()=>{
    fileInput.click()
})
fileInput.onchange=(e)=>{
    temp = ""
    console.log(e.target.files);
    let file = e.target.files[0]
    if(file){
        let filename = file.name
        console.log(filename);
        progressBar.style.width = "100%"
        percent.textContent = `${progressBar.style.width}`
        name1.textContent = `${filename} Uploaded`
        name2.textContent = `${filename} Uploaded`
    }
}