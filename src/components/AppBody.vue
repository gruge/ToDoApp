<template>
<main>
<div class="container mx-auto">
    <p style="color: white; font-size: 5em; text-align: center;" class="select-none">
      My Day
    </p>
    <p style="color: white; font-size: 1.5em; text-align: center;" class="select-none">
        <span>{{moment().format('MMMM Do YYYY')}}</span>
    </p>
</div>
    <div class="mx-auto w-60em h-7em mt-3em border-3 rounded-full bg-transparent flex" id="body">
        <img  @click="submitTask" style="user-drag: none;" src="../assets/images/plus.png" class="cursor-pointer m-1.3em h-4em w-4em select-none" />
     <input v-model="task" style="color: white; font-size: 4.5em; outline: none;" class="mt-0.1em mx-auto w-11.5em bg-transparent drop-shadow-2xl" type="text" id="fname" name="fname">
    </div>

<div class="mx-auto w-60em">
    <tr v-for="(task, index) in tasks" :key="index">
        <div class="w-60em h-7em mt-3em border-3 rounded-full bg-transparent flex">
            <img @click="deleteTask(index)" style="user-drag: none;" src="../assets/images/trash.png" class="cursor-pointer m-1.3em h-4em w-4em select-none" />
                <div>
                    <td style="color: white; font-size: 4.5em; outline: none;">{{task.name}}</td>
                </div>
            </div>
        </tr>
    </div>
</main>
</template>

<script>
export default {
    data() {
        return {
            tasks: [
            {
                name: 'task1'
            },
            {
                name: 'task2'
            },
            {
                name: 'task3'
            }
        ]
      }
    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        submitTask() {

            if(this.task.length > 0){
            this.tasks.push({
          name: this.task,
        });
        }
      }
    }
}
</script>
