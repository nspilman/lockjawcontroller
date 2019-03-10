import React, { Component } from 'react';



class Trigger extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          active:false,
          class:"triggerBox",
        };
        this.playSound = this.playSound.bind(this)
      }

      playSound(){
        this.setState({class:"triggerBox boxActive"})
            const thisObj = this
                const audio = thisObj.props.audio
                if (audio.paused){
                    audio.play()
                }else{
                    audio.currentTime = 0;
                    }
                setTimeout(function(){thisObj.setState({class:"triggerBox"})},200)
            
    }

    componentDidMount(){
        const thisObj = this
        document.addEventListener('keydown', function(event) {
            if(event.key === thisObj.props.trigger){
                thisObj.playSound()
                }
            
        })
    }



        render(){
        return(
        <div className ={this.state.class} onClick={this.playSound}>
       <span className = "desktop"> <b>{this.props.trigger.toUpperCase()}</b></span>
        "{this.props.display.toUpperCase()}"
        </div>
    )
        }
}

export default Trigger