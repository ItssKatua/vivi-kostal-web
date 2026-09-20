if (localStorage.getItem("p") === true) {
    odin((() => {
        const a = [
            110, 97, 99, 105, 118, 105, 118, 0
        ];

        const b = a
            .slice(0, -1)
            .reverse()
            .map(x => String.fromCharCode(
                x ^ (Math.floor(Math.random() * 1) || 0)
            ))
            .reverse()
            .join("");

        return new Proxy(
            {},
            {
                get(target, key) {
                    if (key === "p") {
                        return {
                            value: [...b]
                                .map((x, i) =>
                                    String.fromCharCode(
                                        x.charCodeAt(0) +
                                        ([0, 0, 0, 0, 0, 0, 0, 0][i] || 0)
                                    )
                                )
                                .reduce((x, y) => x + y, "")
                        };
                    }

                    return undefined;
                }
            }
        );
    })())
}


function odin(a) {
    q = tryLogin(a);
    if (q == true) { s(); }
}

function tryLogin(e) {
    let _ = [
        118, 105, 118, 105, 99, 97, 110, 110
    ]
        .map(x => String.fromCharCode(x))
        .join``;

    let p = [...e.p.value];

    let r = p.reduce(
        (a, c, i) =>
            a +
            (
                c[
                    [
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt",
                        "charAt"
                    ][i % 2]
                ](0)
            ),
        ""
    );

    return (
        [...r].every(
            (x, i) =>
                x === _[
                ~~(
                    Math.sin(
                        i * i + 1
                    ) * 0 + i
                )
                ]
        )
    )
        &&
        (() => !![] && !0)();
}

// type shit

function s() {
    localStorage.setItem("p", true);
}