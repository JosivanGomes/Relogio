class ClockController{
    constructor(){
        this._locale = 'pt-BR'

        this._time = document.querySelector('#hora') 
        this._date = document.querySelector('#data')

        this._currentDate

        this.initialize()
    }

    initialize(){
        this.timeOClock()
        setInterval(() => {
            this.timeOClock()
        }, 1000)
    }



    timeOClock(){
        let nowHour = this.cdateControl.getHours().toLocaleString(this._locale)
        let nowMinutes = this.cdateControl.getMinutes().toLocaleString(this._locale)
        let nowSeconds = this.cdateControl.getSeconds().toLocaleString(this._locale)
        
        let hour
        let minutes
        let seconds
        
        if (nowHour.length == 1){
            hour = `0${nowHour}`
        }else{
            hour = this.cdateControl.getHours().toLocaleString(this._locale)
        }

        if (nowMinutes.length == 1){
            minutes = `0${nowMinutes}`
        }else{
            minutes = nowMinutes
        }

        if (nowSeconds.length == 1){
            seconds = `0${nowSeconds}`
        }else{
            seconds = nowSeconds
        }
        

        this.timeControl = `${hour}:${minutes}<span>:${seconds}</span>`

        this.dateControl = this.cdateControl.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })
    }

    get timeControl(){
        return this._time.innerHTML
    }

    set timeControl(value){
        this._time.innerHTML = value
    }


    get dateControl(){
        return this._date.innerHTML
    }

    set dateControl(value){
        this._date.innerHTML = value
    }

    get cdateControl(){
        return new Date()
    }

    set cdateControl(value){
        this._currentDate(value)
    }

    


}