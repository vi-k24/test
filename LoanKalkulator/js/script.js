//Listen for Submit
document.getElementById("loan-form").addEventListener("submit",function (e){
    e.preventDefault()
    //Show Loader
    document.getElementById("loading").style.display = "block";
    //Hide Result
    document.getElementById("result").style.display = "none"

    setTimeout(calculateResult, 2000)
    function calculateResult(){
        const amount = document.getElementById("amount")
        const interest = document.getElementById("interest")
        const year = document.getElementById("years")
        const monthlypayment = document.getElementById("monthly-payment")
        const totalinterest = document.getElementById("total-interest")
        const totalpayment = document.getElementById("total-payment")

        const pinjaman = parseFloat(amount.value)
        const bunga = parseFloat(interest.value)/100/12
        const periode = parseFloat(year.value)*12

        if(isFinite(pinjaman)){
            monthlypayment.value = ((pinjaman + (pinjaman*bunga*periode))/periode).toFixed(2)
            totalpayment.value = (pinjaman +(pinjaman*bunga*periode)).toFixed(2)
            totalinterest.value = (pinjaman*bunga*periode).toFixed(2)
                //Hide Loader
                document.getElementById("loading").style.display = "none"; 
                //Show result  
                document.getElementById("result").style.display = "block";   
        }else{
            showMessages("Amount tidak berisi numeric", "alert-primary")
            
        }

    }
})

function showMessages(pesanerror,warna){
    document.getElementById("loading").style.display = "none";  
    document.getElementById("result").style.display = "none";
    let errorDiv = document.createElement("div");
    errorDiv.className = "alert " + warna
    errorDiv.appendChild(document.createTextNode(pesanerror))
    // Select parent and target
    let parent = document.querySelector(".card")
    let target = document.querySelector("#loan-form")
    //insert error above heading
    parent.insertBefore(errorDiv,target)
    //clear error message after 3 second
    setTimeout(clearMessage, 3000)
}

function clearMessage(){
    document.querySelector('.alert').remove() 
}