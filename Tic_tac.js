let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#New-btn");
let msgcontainer = document.querySelector(".msg-container"); // Correct reference to msg-container
let msg = document.querySelector("#msg");

let turn0 = true;
let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide"); // Show the message container
    disableboxes();
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = ""; // Clear the content of each box
    }
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }
        }
    }
};

const resetgame = () => {
    turn0 = true;
    enableboxes(); // Re-enable all boxes and clear them
    msgcontainer.classList.add("hide"); // Hide the message container
};

newgamebtn.addEventListener("click", resetgame); // Reset for new game button
resetbtn.addEventListener("click", resetgame); // Reset for the main reset button
