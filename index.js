const Manager = require('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require("./lib/Intern");
const render = require("./src/page-template");
const inquirer = require("inquirer");
const fs = require("fs");

function buildTeam(){
    fs.writeFile("/dist.team.html", render(teamMembers), 'utf-8')
}