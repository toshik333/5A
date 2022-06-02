
let char = {
    hp: 7,
    maxhp: 10,
    mp: 7,
    maxmp: 10,
    cp: 7,
    maxcp: 10,
    dmg: 1,
    name: "Ксюша",
    class: "noclass",
    // skills: {
    //     punch: punch,
    //     fireball: fair
    // },
    avatar: "../picture/noname.jpg"
}

function update(char) {
    $("#name").text(char.name);
    $("#hp .line").css("width", `${char.hp * 100 / char.maxhp}%`)
    $("#mp .line").css("width", `${char.mp * 100 / char.maxmp}%`)
    $("#cp .line").css("width", `${char.cp * 100 / char.maxcp}%`)
    $("#avatar").attr("src", char.avatar);
}

function punch(dmg) {
    alert(`Вы нанесли ${dmg} урона!`)
}
function fair(dmg, mp) {
    alert(`Вы нанесли ${dmg} урона!`)
}

update(char);
for (skill in char.skills) {
    let skill_elem = $("<button>").attr("id", skill).text(skill)
    $("skills").append(skill_elem);
    $(`#${skill}`).click(function () {
        char.skills[skill](char.dmg, char.mp)
    })
    $(".skills").append(skill_elem)
}


// setInterval(() => {
//     if(char.hp < char.maxhp) {
//         char.hp += 0.1
//     }
//     update(char)
// }, 450);