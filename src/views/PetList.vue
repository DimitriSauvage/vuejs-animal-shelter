<template>
    <div id="pet-list">   
        <div class="d-flex justify-content-around pb-2 mb-2 border-bottom border-light">
            <div class="form-group">
                <label for="fName">Nom</label>
                <input class="form-control" type="text" name="fName" id="fName" v-model="fName">
            </div>
            <div class="form-group">
                <label for="fSpacies">Espèce</label>                
                <input class="form-control" type="text" name="fSpacies" id="fSpacies" v-model="fSpacies">    
            </div>
            <div class="form-group">
                <label for="fGender">Sexe</label>                
                <input class="form-control" type="text" name="fGender" id="fGender" v-model="fGender">    
            </div>
            <div class="form-group">
                <label for="fAge">Age</label>                
                <input class="form-control" type="text" name="fAge" id="fAge" v-model="fAge">    
            </div>
            <div class="form-group">
                <label for="fSituation">Situation</label>                
                <input class="form-control" type="text" name="fSituation" id="fSituation" v-model="fSituation">    
            </div>
        </div>
        <Pet v-for="pet in filteredPets" :pet="pet" :key="pet.name"></pet>
    </div>
</template>

<script>
import Pet from '@/components/Pet.vue';



export default {
    name : 'pet-list',
    components: {
        Pet
    },
    data : function () {
        return {
            pets :  [
                    { name: 'Tom', spacies: 'Chat', gender: 'male', age: 10, situation: "abandoned"},
                    { name: 'Jerry', spacies: 'Sourie', gender: 'femelle', age: 15, situation: "abandoned"},
                    { name: 'Jack', spacies: 'Moineaux', gender: 'male', age: 5, situation: "abandoned"},
                    { name: 'Sparrow', spacies: 'Chat', gender: 'femelle', age: 5, situation: "abandoned"},
            ],
            fName: "",
            fSpacies: "",
            fGender: "",
            fAge: "",
            fSituation: "",
        }
    },
    computed: {
        filteredPets: function () {
            return this.pets.filter((p) => 
            p.name.toLowerCase().includes(this.fName.toLowerCase()) &&
            p.spacies.toLowerCase().includes(this.fSpacies.toLowerCase()) &&
            p.gender.toLowerCase().includes(this.fGender.toLowerCase()) &&
            (p.age.toString().includes(this.fAge.toString())) &&
            p.situation.toLowerCase().includes(this.fSituation.toLowerCase())
            )
        }
    }
}
</script>

<style>

    #pet-list{
        width: 80%;
        margin: 0 auto;
    }

    .column-name{
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid lightgray;
        display: flex;
        justify-content: space-around;
    }

    .column-name div{
        display: flex;
        flex: 1;
        flex-direction: column;
    }
</style>