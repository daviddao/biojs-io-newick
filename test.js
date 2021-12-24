import { parse_json, parse_newick } from "./src/index.js";

describe('BioJS2 Tree Test', function () {
    const newick = "((human,chimp),mouse);";
    const tree = parse_newick(newick);
	const backToNewick = parse_json(tree);

    // Newick
	describe('Newick reader', function () {
		it("Exists and is called tree.parse_newick", function () {
			expect(parse_newick).toBeDefined();
		});

		it("Can read a simple tree", function () {
			expect(tree).toBeDefined();
		});
		it("The returned tree has the correct structure", function () {
			expect(tree).toHaveProperty("name");
			expect(tree).toHaveProperty("children");
			expect(tree.children[0]).toHaveProperty("name");
			expect(tree.children[0]).toHaveProperty("children");
			expect(tree.children[0].children[0].name).toEqual("human");
			expect(tree.children[0].children[0].children).toBeUndefined();
		});

		it("Reads the branch lengths", function () {
			const newick = "((human:0.2,chimp:0.3),mouse:0.5);";
			const tree = parse_newick(newick);
			expect(tree.children[1].branch_length).toBeCloseTo(0.5, 0.05);
			expect(tree.children[0].children[0].branch_length).toBeCloseTo(0.2, 0.05);
			expect(tree.children[0].children[1].branch_length).toBeCloseTo(0.3, 0.05);
		});
    });

	// JSON
	describe('JSON reader', function () {
		it("Exists and is called parse_json", function () {
			expect(parse_json).toBeDefined();
		});

		it("Can read a simple JSON tree", function () {
			expect(backToNewick).toBeDefined();
		});
		it("The returned tree has the correct structure", function () {
			expect(backToNewick).toEqual(newick);
		});
	});
});
