function toggleAccordion(arrAccordion){
    for(let i = 0; i < arrAccordion.length; i++){
        arrAccordion[i].addEventListener('click',  function() {
            for(let j = 0; j < arrAccordion.length; j++){
               arrAccordion[j].closest('.bar_full').classList.add('active');
            }; 
            this.classList.add('active teste');     
        });
    };
};
const b = Array.from(document.querySelectorAll('.modulo'));
toggleAccordion(b);
