// https://leetcode.com/problems/valid-parentheses/description/?envType=problem-list-v2&envId=oizxjoit

const expectedClose = (val) => {
    switch (val) {
        case '(':
            return ')';
        case '[':
            return ']';
        case '{':
            return '}';
    }
}

var isValid = function(s) {
    const stack = [];

    for (i = 0; i < s.length; i++) {
        if (['[', '{', '('].includes(s[i])) {
            stack.push(expectedClose(s[i]))
        } else if (s[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            return false;
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([])'));
console.log(isValid('([)]'));