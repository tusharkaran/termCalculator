

function addKids(){
    let currentkids = document.getElementsByClassName('kids-adding-data-occurance')
    currentkids[0].innerHTML =  currentkids[0].innerHTML +' <div class="row pb-4  kid-section-detail added-to-data">'+
    '<div class="col-12 col-md-6">'+
        '<div class="input-data-calulator">'+
            '<div class="text-label-data">Kid’s Age</div>'+
            '<div class="input-tag-image-text">'+
                '<img src="src/cake.png">'+
            '<input id="Age" type="number" placeholder="Enter" >'+
            '<div class="text-after-input" >Years</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="col-12 col-md-6">'+
        '<div class="input-data-calulator">'+
            '<div class="text-label-data">Kid’s Current Education Expense</div>'+
            '<div class="input-tag-image-text">'+
            '<img src="src/heroicons_currency-rupee.png">'+
            '<input id="Age" type="number" placeholder="Enter" >'+
            '<div class="text-after-input" >Lakhs</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
  
'</div>';
document.querySelector(".remove-to-form").style.display = "block";
}
function removeKids(){
    let dataForm = document.querySelectorAll(".added-to-data");
     dataForm[dataForm.length - 1].remove();
     if(document.querySelectorAll(".kid-section-detail").length === 1){
        document.querySelector(".remove-to-form").style.display = "none";
     }
}

function displayBlock(){
    document.querySelector(".Details-component-part").style.display = "block";
    document.querySelector(".show-change-block").style.display = "flex";
    document.querySelector(".form-data-with-text").style.display = "none";

}
function showCalculator(){
    document.querySelector(".Details-component-part").style.display = "none";
    document.querySelector(".show-change-block").style.display = "none";
    document.querySelector(".form-data-with-text").style.display = "flex";
}


const myDonut = donut({
    el: document.getElementById('example'),
    data: [{
        value: 90,
        name: 'A'
    }, {
        value: 0,
        name: 'B',
        customData: 'CSSScript'
    }, {
        value: 10,
        name: 'C'
    }
    // ...
    ],
    colors: ['#11E1BC', '#F5A011', '#19ADFF'],
});