var igUpload;

function preload(){
    igUpload = loadImage("Kehlani.jpeg");
}


function setup(){
    createCanvas(igUpload.width, igUpload.height);
}

function draw(){
    background(0);
    image(igUpload,0,0);
    loadPixels();
    
    for(var row=0; row<height; row++){
        for(var col=0; col<width; col++){
            var index = (row * width + col) * 4;
            
            r = pixels[index];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];
            
            if(keyIsPressed){
                if(key=="r"){
                    rainbow(index, col, row, g, a);
                }
                if(key=="1"){
                    gloom(index, g);
            }   
            if(key=="2"){
            r = pixels[index] = 0;
            g = pixels[index + 1] = g;
            b = pixels[index + 2] = 0;
            a = pixels[index + 3] = a;
                    
            }
            if(key=="3"){
            r = pixels[index] = r;
            g = pixels[index + 1] = b;
            b = pixels[index + 2] = g;
            a = pixels[index + 3] = a;
                    
            }
            if(key=="4"){
            r = pixels[index] = r/2;
            g = pixels[index + 1] = g/2;
            b = pixels[index + 2] = b/2;
            a = pixels[index + 3] = a;
                    
                }
                
                if(key=="5"){
            r = pixels[index] = r*2;
            g = pixels[index + 1] = g*2;
            b = pixels[index + 2] = b*2;
            a = pixels[index + 3] = a;
                }
                
                if(key=="6"){
            r = pixels[index] = 255 - r;
            g = pixels[index + 1] = 255 - g;
            b = pixels[index + 2] = 255 - b;
            a = pixels[index + 3] = a;
                }
                
                if(key=="7"){
            r = pixels[index] = r/4;
            g = pixels[index + 1] = g/6;
            b = pixels[index + 2] = b/2;
            a = pixels[index + 3] = a;
                }
            }
        
            
           
        }
    }
    
    updatePixels();
}

function rainbow(index, col, row, g, a){
     pixels[index] = col;
            pixels[index + 1] = g;
            pixels[index + 2] = row;
            pixels[index + 3] = a;
}

function gloom(index, g){
    if(key=="1"){
    pixels[index] = g;
    pixels[index + 1] = g;
    pixels[index + 2] = g;
    pixels[index + 3] = a;
                    
                }
function goblin(index, g){
   if(key=="3"){
    r = pixels[index] = 0;
    g = pixels[index + 1] = g;
    b = pixels[index + 2] = 0;
    a = pixels[index + 3] = a;
            
            }
}

function cloud(index, g){
    if(key=="4"){
            r = pixels[index] = r/2;
            g = pixels[index + 1] = g/2;
            b = pixels[index + 2] = b/2;
            a = pixels[index + 3] = a;
                    
                }
            
            }
            function bright(index, g){
       if(key=="5"){
            r = pixels[index] = r*2;
            g = pixels[index + 1] = g*2;
            b = pixels[index + 2] = b*2;
            a = pixels[index + 3] = a;
                }
            
            }
            
              function xray(index, g){
       if(key=="6"){
            r = pixels[index] = 255 - r;
            g = pixels[index + 1] = 255 - g;
            b = pixels[index + 2] = 255 - b;
            a = pixels[index + 3] = a;
                }
            
            }
            
            function blues(index, g){
        if(key=="7"){
            r = pixels[index] = r/4;
            g = pixels[index + 1] = g/6;
            b = pixels[index + 2] = b/2;
            a = pixels[index + 3] = a;
                }
            
            }
            
            
            
}


