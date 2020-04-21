<template>
    <div id="animal-list">   
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
        <Animal v-for="animal in filteredAnimals" :animal="animal" :key="animal.name"></Animal>
    </div>
</template>

<script>
import Animal from '@/components/Animal.vue';



export default {
    name : 'animal-list',
    components: {
        Animal
    },
    data : function () {
        return {
            fName: "",
            fSpacies: "",
            fGender: "",
            fAge: "",
            fSituation: "",
        }
    },
    computed: {
        filteredAnimals: function () {
            return this.animals.filter((p) => 
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

    #animal-list{
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