
Vue.component("login-page", {
    template: "#login-page-template", 
    props: ["login_details"]
})

new Vue({
    el:"#app", 
    vuetify: new Vuetify(), 
    data: {
        loginDetails: {
                firstName: "",     
                firstNameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 30 || 'Name must be less than 30 characters',
                ], 
                lastName: "", 
                lastNameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 30 || 'Name must be less than 30 characters',
                ],
                dateOfBirth: '', 
                dateOfBirthRules: [
                    v => v.split('/')[0] <= 12 || 'Enter a valid month', 
                    v => v.split('/')[1] <= 31 || 'Day cannot be greater than 31', 
                    v => v.split('/')[2] >= 1900 || 'Year cannot be less than 1900', 
                    v => v.split('/')[2] <= 2020 || 'Year cannot be beyond 2020',
                ], 
                email: 'mahidhar@doctormm.com',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                
        }, 
        accessDenied: false, 
        ipData: {},
        allowedZipCodes: ['11553'],
        
        debug: true, 

    }, 
    created: async function(){
        const api_url = 'http://ip-api.com/json/';
        const response = await fetch(api_url);
        const data = await response.json();
        zipcode = data.zip;
        this.ipData = data; 
       
        if(this.allowedZipCodes.indexOf(zipcode) === -1 ){
            this.accessDenied = true;
        }
        
    }, 
     

})       
    