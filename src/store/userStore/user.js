class UserStore {
    constructor(){
        this.state = {
            nom: "",
            prenom: "",
            email: "",
            api_token: "",
            isLog: false
        }
    }

    isLog() {
        return this.isLog;
    }

    login(element){
        this.state.nom = element.nom;
        this.state.prenom = element.prenom;
        this.state.email = element.email;
        this.state.api_token = element.api_token;
        this.state.isLog = true;
    }

    disconect(){
        this.state.nom = '';
        this.state.prenom = '';
        this.state.email = '';
        this.state.api_token = '';
        this.state.isLog = false;
    }
}

export default new UserStore();