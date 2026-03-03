const FormulaDB = {
    math: [
        { name: "Quadratic Roots", eqn: "(-b + sqrt(b^2 - 4*a*c))/(2*a)", vars: ["a", "b", "c"] },
        { name: "Integrate x^n", eqn: "(x^(n+1))/(n+1)", vars: ["x", "n"] },
        { name: "Complex Modulus", eqn: "sqrt(re^2 + im^2)", vars: ["re", "im"] },
        { name: "Probability (Bayes)", eqn: "(pa * pba) / pb", vars: ["pa", "pba", "pb"] }
    ],
    physics: [
        { name: "Kinematics 3", eqn: "sqrt(u^2 + 2*a*s)", vars: ["v", "u", "a", "s"] },
        { name: "Gravitation", eqn: "G * m1 * m2 / r^2", vars: ["F", "G", "m1", "m2", "r"] },
        { name: "Projectile Range", eqn: "(u^2 * sin(2*theta))/g", vars: ["u", "theta", "g"] },
        { name: "Coulomb Law", eqn: "k * q1 * q2 / r^2", vars: ["F", "k", "q1", "q2", "r"] }
    ],
    chemistry: [
        { name: "Ideal Gas Law", eqn: "(n * R * T) / V", vars: ["P", "n", "R", "T", "V"] },
        { name: "pH Calculation", eqn: "-log10(H)", vars: ["pH", "H"] },
        { name: "Nernst Equation", eqn: "E0 - (0.059/n) * log10(Q)", vars: ["E", "E0", "n", "Q"] },
        { name: "Molarity", eqn: "n / V", vars: ["M", "n", "V"] }
    ]
};
