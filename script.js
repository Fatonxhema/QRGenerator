function generateQRCode()
        {
            var gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
            var image=document.getElementById("img");
            var text=document.getElementById("qrtext").value;
            var sizeofimage=document.getElementById("size").value;

            if (text!=="" && sizeofimage=="100")
            {
                image.src=gapi+"100x100"+"&chl="+text;
                // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
            }
            else if(text!=="" && sizeofimage=="150")
            {
                image.src=gapi+"150x150"+"&chl="+text;
            }
            else if(text!=="" && sizeofimage=="200")
            {
                image.src=gapi+"200x200"+"&chl="+text;
            }
            else if (text!=="" && sizeofimage=="250")
            {
                image.src=gapi+"250x250"+"&chl="+text;
            }
            else if (text!=="" && sizeofimage=="300")
            {
                image.src=gapi+"300x300"+"&chl="+text;
            }
            else
            {
                alert("Please Enter Text");
            }
        }
function 
downloadImage(){
    var image = document.getElementsById("img").value;
    if(image.src !== null){
        image.src.download;
    }

}