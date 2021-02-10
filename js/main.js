const app = Vue.createApp({
    data : () => ({
        title : "Gradient Gen",
        color1: "#d5ee11",
        color2: "#f59e24",
        orientation: 1
    }),
    computed :{
        setColor(){
            let position = 'to right';
            if (this.orientation==2) position = 'to left';
            else if(this.orientation==3) position = 'to top';           
            else if(this.orientation==4) position = 'to bottom';
            
           return ` background: linear-gradient(${position}, ${this.color1}, ${this.color2}); `;
        }
      
        
    }

});