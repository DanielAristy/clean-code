(() => {

    type Gender = 'M'| 'F'; 
 
    interface PersonProps {
        birthDate: Date
        gender: Gender;
        name: string; 
    }
    class Person {
        public birthDate: Date
        public gender: Gender;
        public name: string; 
        constructor({birthDate, gender, name}: PersonProps){
            this.birthDate = birthDate
            this.name = name;
            this.gender = gender;
        }
    }


    interface UserProps {
        birthDate: Date
        email: string;
        gender: Gender;
        name: string; 
        role: string;
    }

    class User extends Person {
        public email: string;
        public lastAccess: Date;
        public role: string
        constructor(
            {
                birthDate,
                email,
                gender,
                name,
                role
            }: UserProps ){
            super({name, gender, birthDate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredential(){
            return true;
        }
    }

    interface UserSettingProps{
        birthDate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSetting extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({
            birthDate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory
        }: UserSettingProps ){
            super({email, role, name, gender, birthDate})
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    

})();