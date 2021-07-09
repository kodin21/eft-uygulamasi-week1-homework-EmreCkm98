const accounts = [
    {
        iban: 'trxx yyyy xxxx yyyy',
        balance: 100,
    },
    {
        iban: 'trxx yyyy xxxx yyyx',
        balance: 5040,
    },
    {
        iban: 'trxx yyyy xxxx xyyx',
        balance: 10594,
    }
];

const user = {
    name: 'Jane',
    surname: 'Doe',
    accounts
};

const timer=60*1000*2;
let getButton=document.getElementById('jsbutton');
let getSrcAccountDropDwn=document.getElementById('selectSrcAccount');
let getDestAccountTBox=document.getElementById('getDestAccount');
let getSendMoneyTBox=document.getElementById('SendMoney');
let getModal=document.getElementById('jsModal');

window.onload=function(){
    if(getSrcAccountDropDwn.value==0 ||getDestAccountTBox.value==""){
       getButton.disabled=true;
    }
    getModal.hidden;
    window.setTimeout(()=>{
        alert("Oturumunuz sonlanmıştır");
    
        window.location.reload();
    },timer);
};



const getAccountInDropDwn=()=>{
     
    let id=1;
    user.accounts.forEach((item)=>{  
       
        let accountOption1=document.getElementById(`account${id}`);
        accountOption1.text=`iban: ${item.iban} - bakiye: ${item.balance}`;
        id++;
    });
};

const getAmount=()=>{
    let getSrcAccountSelected=getSrcAccountDropDwn.options[getSrcAccountDropDwn.selectedIndex].text;
    return getSrcAccountSelected=parseInt(getSrcAccountSelected.substr(36));
};

const checkBalanceAmount=(input)=>{
    let getAmountTextbox=getAmount();
    if(input.value>getAmountTextbox)
    {
        getButton.disabled=true;
        alert("gönderilecek tutar bakiyenizden fazla.lütfen hesabınıza yeterli parayı yükleyin ya da bakiyenizden az tutar girin");
       
      
    }
};

getButton.addEventListener('click',()=>{
    let getAmountTextbox=getAmount();
    if(getAmountTextbox<500)
    {
        alert("Başarılı");
    }
    else if(getAmountTextbox>=500)
    {
        
        $('#jsModal').modal('show');
        let getPswrdSubmit=document.getElementById('jsPswrdSubmit');
        let getPasswordInput=document.getElementById('jsNumber');
        let counter=0;

        getPswrdSubmit.addEventListener('keydown',(e)=>{
            if(e.key=="Enter")
            {
                e.preventDefault();
                if(getPasswordInput.value==="1234")
                {
                    alert("Şifreniz doğru..İşlem başarılı");   
                }
                else
                {      
                                
                    if(counter==2)
                    {
                        console.log("Hesabınız bloke oldu.");
                        alert("Hesabınız bloke oldu."); 
                    }
                   
                    alert("Şifreniz yanlış..");   
                    counter++;
                    console.log(counter);
                }
            }
        });
        getPswrdSubmit.addEventListener('click',()=>{
           
            
            if(getPasswordInput.value==="1234")
            {
                alert("Şifreniz doğru..İşlem başarılı");   
            }
            else
            {      
                            
                if(counter==2)
                {
                    console.log("Hesabınız bloke oldu.");
                    alert("Hesabınız bloke oldu."); 
                }
               
                alert("Şifreniz yanlış..");   
                counter++;
                console.log(counter);
            }
        });
    }
})

function checkValidInput() {//4 haneli sayı kontrolü input için
    // Allow only delete, backspace, left arrow, right arrow, 
    // Tab, ctrl+v and numbers
    $("#jsNumber").keydown(function(event) {
        if (!((event.keyCode == 46 || 
            event.keyCode == 8  || 
            event.keyCode == 37 || 
            event.keyCode == 39 || 
            event.keyCode == 9) || 
            (event.ctrlKey && event.keyCode == 86) ||  // Edit: Added to allow ctrl+v
            $(this).val().length < 4 &&
            ((event.keyCode >= 48 && event.keyCode <= 57) ||
            (event.keyCode >= 96 && event.keyCode <= 105)))) {
            // Stop the event
            event.preventDefault();
            return false;
        }
    });
    // Edit: Added validate after copy+paste.
    // This removes non-numeric characters and truncates the length
    // to 4 if the user copy + pasted.
    $(".jsNumber").change(function(event) {
        var value =  $(this).val();
        value = value.replace(/[^0-9]/g,'');
        value = value.substr(0,4);
        $(this).val(value);
    });
}

checkValidInput();

const selectAccount=()=>{
    console.log('You selected: ',getSrcAccountDropDwn.options[getSrcAccountDropDwn.selectedIndex].text );
};

getSrcAccountDropDwn.addEventListener('change',()=>{
    
    if(getSrcAccountDropDwn.value!=0){
        getButton.disabled=false;
     }
    /*  getDestAccountTBox.addEventListener('change',()=>{
        if(getDestAccountTBox.value!==""){
            getButton.disabled=false;
         }
     }); */
});


getAccountInDropDwn();




