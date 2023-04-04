(() => {

    // Aplicando el principio de Responsabilidad unica.
    // Priorizar la composicion frente a la herencia.

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
        email: string;
        role: string;
    }

    class User  {
        public email: string;
        public lastAccess: Date;
        public role: string
        constructor(
            {
                email,
                role
            }: UserProps ){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredential(){
            return true;
        }
    }

    interface SettingProps{
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Setting {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor({
            lastOpenFolder,
            workingDirectory
        }: SettingProps ){
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
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

    class UserSetting {
        public person: Person;
        public user: User;
        public setting: Setting;

        constructor({
            name, gender, birthDate, email, role, lastOpenFolder, workingDirectory
        }: UserSettingProps){
            this.person = new Person({name, gender, birthDate})
            this.user = new User({email, role})
            this.setting = new Setting({lastOpenFolder, workingDirectory})
        }
    }

    const newUserSetting = new UserSetting({
        name: 'Daniel Aristizabal',
        gender: 'M',
        birthDate: new Date('1994-02-22'),
        email: 'daniel@gmail.com',
        role: 'Admin',
        lastOpenFolder: '/home',
        workingDirectory: '/user/home'
    })

    console.log({newUserSetting});
    

    

})();