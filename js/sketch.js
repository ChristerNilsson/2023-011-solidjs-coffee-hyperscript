// Generated by CoffeeScript 2.5.1
var Board, Counter, button, color, div, header, log, moveQueen, queen, range, rect, setQueen, svg, text;

import _ from 'https://cdn.skypack.dev/lodash';

import {
  createSignal
} from "https://cdn.skypack.dev/solid-js@1.2.6";

import h from "https://cdn.skypack.dev/solid-js@1.2.6/h";

import {
  render
} from "https://cdn.skypack.dev/solid-js@1.2.6/web";

range = _.range;

log = console.log;

div = (...a) => {
  return h("div", a);
};

header = (...a) => {
  return h("header", a);
};

svg = (...a) => {
  return h("svg", a);
};

rect = (...a) => {
  return h("rect", a);
};

text = (...a) => {
  return h("text", a);
};

button = (...a) => {
  return h("button", a);
};

Counter = () => {
  var count, increment, setCount;
  [count, setCount] = createSignal(0);
  increment = () => {
    return setCount(count() + 1);
  };
  return button({
    type: "button",
    onClick: increment
  }, () => {
    return "Klick " + count();
  });
};

[queen, setQueen] = createSignal({
  row: 4,
  col: 3
});

moveQueen = (row, col) => {
  return setQueen({row, col}); //queen() + 1
};

color = (row, col) => {
  if ((row + col) % 2 === 1) {
    return "lightblue";
  } else {
    return "yellow";
  }
};

Board = () => {
  var col, row;
  return svg({
    viewBox: "0 0 320 320",
    width: 320,
    height: 320
  }, (function() {
    var i, len, ref, results;
    ref = range(8);
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      row = ref[i];
      results.push((function() {
        var j, len1, ref1, results1;
        ref1 = range(8);
        results1 = [];
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          col = ref1[j];
          results1.push(((row, col) => {
            return rect({
              x: row * 40,
              y: col * 40,
              width: 40,
              height: 40,
              fill: color(row, col),
              onClick: () => {
                return moveQueen(row, col);
              }
            });
          })(row, col));
        }
        return results1;
      }).call(this));
    }
    return results;
  }).call(this), text({
    x: (() => {
      return 20 + 40 * queen().row;
    }),
    y: (() => {
      return 25 + 40 * queen().col;
    })
  }, "♛"), text({
    x: 100,
    y: 105
  }, "♘"));
};

render(Board, document.body);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxRQUFBLEVBQUEsR0FBQSxFQUFBOztBQUFBLE9BQU8sQ0FBUCxNQUFBOztBQUNBLE9BQUE7RUFBUyxZQUFUO0NBQUEsTUFBQTs7QUFDQSxPQUFPLENBQVAsTUFBQTs7QUFDQSxPQUFBO0VBQVMsTUFBVDtDQUFBLE1BQUE7O0FBRUEsS0FBQSxHQUFRLENBQUMsQ0FBQzs7QUFDVixHQUFBLEdBQU0sT0FBTyxDQUFDOztBQUNkLEdBQUEsR0FBUyxDQUFBLEdBQUMsQ0FBRCxDQUFBLEdBQUE7U0FBVSxDQUFBLENBQUUsS0FBRixFQUFRLENBQVI7QUFBVjs7QUFDVCxNQUFBLEdBQVMsQ0FBQSxHQUFDLENBQUQsQ0FBQSxHQUFBO1NBQVUsQ0FBQSxDQUFFLFFBQUYsRUFBVyxDQUFYO0FBQVY7O0FBQ1QsR0FBQSxHQUFTLENBQUEsR0FBQyxDQUFELENBQUEsR0FBQTtTQUFVLENBQUEsQ0FBRSxLQUFGLEVBQVEsQ0FBUjtBQUFWOztBQUNULElBQUEsR0FBUyxDQUFBLEdBQUMsQ0FBRCxDQUFBLEdBQUE7U0FBVSxDQUFBLENBQUUsTUFBRixFQUFTLENBQVQ7QUFBVjs7QUFDVCxJQUFBLEdBQVMsQ0FBQSxHQUFDLENBQUQsQ0FBQSxHQUFBO1NBQVUsQ0FBQSxDQUFFLE1BQUYsRUFBUyxDQUFUO0FBQVY7O0FBQ1QsTUFBQSxHQUFTLENBQUEsR0FBQyxDQUFELENBQUEsR0FBQTtTQUFVLENBQUEsQ0FBRSxRQUFGLEVBQVcsQ0FBWDtBQUFWOztBQUVULE9BQUEsR0FBVSxDQUFBLENBQUEsR0FBQTtBQUNWLE1BQUEsS0FBQSxFQUFBLFNBQUEsRUFBQTtFQUFDLENBQUMsS0FBRCxFQUFRLFFBQVIsQ0FBQSxHQUFvQixZQUFBLENBQWEsQ0FBYjtFQUNwQixTQUFBLEdBQVksQ0FBQSxDQUFBLEdBQUE7V0FBSyxRQUFBLENBQVMsS0FBQSxDQUFBLENBQUEsR0FBVSxDQUFuQjtFQUFMO1NBQ1osTUFBQSxDQUFPO0lBQUMsSUFBQSxFQUFLLFFBQU47SUFBZ0IsT0FBQSxFQUFRO0VBQXhCLENBQVAsRUFDQyxDQUFBLENBQUEsR0FBQTtXQUFLLFFBQUEsR0FBVyxLQUFBLENBQUE7RUFBaEIsQ0FERDtBQUhTOztBQU1WLENBQUMsS0FBRCxFQUFRLFFBQVIsQ0FBQSxHQUFvQixZQUFBLENBQWE7RUFBQyxHQUFBLEVBQUksQ0FBTDtFQUFPLEdBQUEsRUFBSTtBQUFYLENBQWI7O0FBRXBCLFNBQUEsR0FBWSxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQUEsR0FBQTtTQUFhLFFBQUEsQ0FBUyxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQVQsRUFBYjtBQUFBOztBQUVaLEtBQUEsR0FBUSxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQUEsR0FBQTtFQUFhLElBQUcsQ0FBQyxHQUFBLEdBQUksR0FBTCxDQUFBLEdBQVksQ0FBWixLQUFpQixDQUFwQjtXQUEyQixZQUEzQjtHQUFBLE1BQUE7V0FBNEMsU0FBNUM7O0FBQWI7O0FBRVIsS0FBQSxHQUFRLENBQUEsQ0FBQSxHQUFBO0FBQ1IsTUFBQSxHQUFBLEVBQUE7U0FBQyxHQUFBLENBQUk7SUFBQyxPQUFBLEVBQVEsYUFBVDtJQUF3QixLQUFBLEVBQU0sR0FBOUI7SUFBbUMsTUFBQSxFQUFPO0VBQTFDLENBQUo7O0FBQ0M7QUFBQTtJQUFBLEtBQUEscUNBQUE7Ozs7QUFDQztBQUFBO1FBQUEsS0FBQSx3Q0FBQTs7d0JBQ0ksQ0FBQSxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQUEsR0FBQTttQkFBYSxJQUFBLENBQUs7Y0FBQyxDQUFBLEVBQUUsR0FBQSxHQUFJLEVBQVA7Y0FBVyxDQUFBLEVBQUUsR0FBQSxHQUFJLEVBQWpCO2NBQXFCLEtBQUEsRUFBTSxFQUEzQjtjQUErQixNQUFBLEVBQU8sRUFBdEM7Y0FBMEMsSUFBQSxFQUFLLEtBQUEsQ0FBTSxHQUFOLEVBQVUsR0FBVixDQUEvQztjQUErRCxPQUFBLEVBQVEsQ0FBQSxDQUFBLEdBQUE7dUJBQUssU0FBQSxDQUFVLEdBQVYsRUFBYyxHQUFkO2NBQUw7WUFBdkUsQ0FBTDtVQUFiLENBQUEsRUFBQyxLQUFJO1FBRFQsQ0FBQTs7O0lBREQsQ0FBQTs7ZUFERCxFQUlDLElBQUEsQ0FBSztJQUFDLENBQUEsRUFBRSxDQUFDLENBQUEsQ0FBQSxHQUFBO2FBQUssRUFBQSxHQUFHLEVBQUEsR0FBRyxLQUFBLENBQUEsQ0FBTyxDQUFDO0lBQW5CLENBQUQsQ0FBSDtJQUE2QixDQUFBLEVBQUUsQ0FBQyxDQUFBLENBQUEsR0FBQTthQUFJLEVBQUEsR0FBRyxFQUFBLEdBQUcsS0FBQSxDQUFBLENBQU8sQ0FBQztJQUFsQixDQUFEO0VBQS9CLENBQUwsRUFBNkQsR0FBN0QsQ0FKRCxFQUtDLElBQUEsQ0FBSztJQUFDLENBQUEsRUFBRSxHQUFIO0lBQVEsQ0FBQSxFQUFFO0VBQVYsQ0FBTCxFQUFvQixHQUFwQixDQUxEO0FBRE87O0FBUVIsTUFBQSxDQUFPLEtBQVAsRUFBYyxRQUFRLENBQUMsSUFBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyAgICAgICAgICAgICAgICBmcm9tICdodHRwczovL2Nkbi5za3lwYWNrLmRldi9sb2Rhc2gnXHJcbmltcG9ydCB7IGNyZWF0ZVNpZ25hbCB9IGZyb20gXCJodHRwczovL2Nkbi5za3lwYWNrLmRldi9zb2xpZC1qc0AxLjIuNlwiXHJcbmltcG9ydCBoICAgICAgICAgICAgICAgIGZyb20gXCJodHRwczovL2Nkbi5za3lwYWNrLmRldi9zb2xpZC1qc0AxLjIuNi9oXCJcclxuaW1wb3J0IHsgcmVuZGVyIH0gICAgICAgZnJvbSBcImh0dHBzOi8vY2RuLnNreXBhY2suZGV2L3NvbGlkLWpzQDEuMi42L3dlYlwiXHJcblxyXG5yYW5nZSA9IF8ucmFuZ2VcclxubG9nID0gY29uc29sZS5sb2dcclxuZGl2ICAgID0gKGEuLi4pID0+IGggXCJkaXZcIixhXHJcbmhlYWRlciA9IChhLi4uKSA9PiBoIFwiaGVhZGVyXCIsYVxyXG5zdmcgICAgPSAoYS4uLikgPT4gaCBcInN2Z1wiLGFcclxucmVjdCAgID0gKGEuLi4pID0+IGggXCJyZWN0XCIsYVxyXG50ZXh0ICAgPSAoYS4uLikgPT4gaCBcInRleHRcIixhXHJcbmJ1dHRvbiA9IChhLi4uKSA9PiBoIFwiYnV0dG9uXCIsYVxyXG5cclxuQ291bnRlciA9ICgpPT5cclxuXHRbY291bnQsIHNldENvdW50XSA9IGNyZWF0ZVNpZ25hbCAwXHJcblx0aW5jcmVtZW50ID0gKCk9PiBzZXRDb3VudCBjb3VudCgpICsgMVxyXG5cdGJ1dHRvbiB7dHlwZTpcImJ1dHRvblwiLCBvbkNsaWNrOmluY3JlbWVudH0sXHJcblx0XHQoKT0+IFwiS2xpY2sgXCIgKyBjb3VudCgpXHJcblxyXG5bcXVlZW4sIHNldFF1ZWVuXSA9IGNyZWF0ZVNpZ25hbCB7cm93OjQsY29sOjN9XHJcblxyXG5tb3ZlUXVlZW4gPSAocm93LGNvbCkgPT4gc2V0UXVlZW4ge3Jvdyxjb2x9ICNxdWVlbigpICsgMVxyXG5cclxuY29sb3IgPSAocm93LGNvbCkgPT4gaWYgKHJvdytjb2wpICUgMiA9PSAxIHRoZW4gXCJsaWdodGJsdWVcIiBlbHNlIFwieWVsbG93XCJcclxuXHJcbkJvYXJkID0gKCkgPT5cclxuXHRzdmcge3ZpZXdCb3g6XCIwIDAgMzIwIDMyMFwiLCB3aWR0aDozMjAsIGhlaWdodDozMjB9LFxyXG5cdFx0Zm9yIHJvdyBpbiByYW5nZSA4XHJcblx0XHRcdGZvciBjb2wgaW4gcmFuZ2UgOFxyXG5cdFx0XHRcdGRvIChyb3csY29sKSA9PiByZWN0IHt4OnJvdyo0MCwgeTpjb2wqNDAsIHdpZHRoOjQwLCBoZWlnaHQ6NDAsIGZpbGw6Y29sb3Iocm93LGNvbCksIG9uQ2xpY2s6KCk9PiBtb3ZlUXVlZW4gcm93LGNvbH1cclxuXHRcdHRleHQge3g6KCgpPT4gMjArNDAqcXVlZW4oKS5yb3cpLCB5OigoKT0+MjUrNDAqcXVlZW4oKS5jb2wpfSxcIuKZm1wiXHJcblx0XHR0ZXh0IHt4OjEwMCwgeToxMDV9LFwi4pmYXCJcclxuXHJcbnJlbmRlciBCb2FyZCwgZG9jdW1lbnQuYm9keVxyXG4iXX0=
//# sourceURL=c:\github\2023-011-solidjs-coffee-teacup\coffee\sketch.coffee