export const categories = {
    dp: {
        id: 'dp',
        title: "Dynamic Programming",
        description: "Master patterns from O(N) to O(N³)",
        questions: [
            {
                id: 1,
                problem: "Trapping Rain Water",
                difficulty: "Hard",
                timeComplexity: "O(N)",
                concept: "Space optimization (O(N)→O(1)), Two Pointers.",
                url: "https://leetcode.com/problems/trapping-rain-water/"
            },
            {
                id: 2,
                problem: "Maximum Profit in Job Scheduling",
                difficulty: "Hard",
                timeComplexity: "O(NlogN)",
                concept: "Interval DP + Binary Search on sorted data.",
                url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/"
            },
            {
                id: 3,
                problem: "Regular Expression Matching",
                difficulty: "Hard",
                timeComplexity: "O(MN)",
                concept: "Complex state transitions, handling edge cases (*).",
                url: "https://leetcode.com/problems/regular-expression-matching/"
            },
            {
                id: 4,
                problem: "Edit Distance",
                difficulty: "Med",
                timeComplexity: "O(MN)",
                concept: "2D Grid DP, fundamental string algorithm.",
                url: "https://leetcode.com/problems/edit-distance/"
            },
            {
                id: 5,
                problem: "Burst Balloons",
                difficulty: "Hard",
                timeComplexity: "O(N³)",
                concept: "Reverse thinking (last step first), Interval DP.",
                url: "https://leetcode.com/problems/burst-balloons/"
            },
            {
                id: 6,
                problem: "Super Egg Drop",
                difficulty: "Hard",
                timeComplexity: "O(KlogN)",
                concept: "Mathematical inversion of state, Binary Search.",
                url: "https://leetcode.com/problems/super-egg-drop/"
            },
            {
                id: 7,
                problem: "Find the Safest Path in a Grid",
                difficulty: "Med",
                timeComplexity: "O(N²logN)",
                concept: "Hybrid (Multi-source BFS + Priority Queue/BinSearch).",
                url: "https://leetcode.com/problems/find-the-safest-path-in-a-grid/"
            },
            {
                id: 8,
                problem: "Minimum Cost to Merge Stones",
                difficulty: "Hard",
                timeComplexity: "O(N³)",
                concept: "K-Way Interval DP, high-dimensional state logic.",
                url: "https://leetcode.com/problems/minimum-cost-to-merge-stones/"
            },
            {
                id: 9,
                problem: "Longest Increasing Subsequence",
                difficulty: "Med",
                timeComplexity: "O(NlogN)",
                concept: "Patience Sorting, maintaining monotonic invariants.",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/"
            },
            {
                id: 10,
                problem: "Word Break II",
                difficulty: "Hard",
                timeComplexity: "O(2^N)",
                concept: "DFS + Memoization, reconstructing solutions.",
                url: "https://leetcode.com/problems/word-break-ii/"
            },
            {
                id: 11,
                problem: "Numbers At Most N Given Digit Set",
                difficulty: "Hard",
                timeComplexity: "O(logN)",
                concept: "Digit DP, combinatorics with constraints.",
                url: "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/"
            },
            {
                id: 12,
                problem: "Binary Tree Maximum Path Sum",
                difficulty: "Hard",
                timeComplexity: "O(N)",
                concept: "Tree DP, distinguishing path-through vs. path-end.",
                url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
            },
            {
                id: 13,
                problem: "Coin Change",
                difficulty: "Med",
                timeComplexity: "O(S⋅N)",
                concept: "Unbounded Knapsack, impossibility checks.",
                url: "https://leetcode.com/problems/coin-change/"
            },
            {
                id: 14,
                problem: "Maximum Subarray (Variations)",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Kadane’s Algorithm, state machine for deletions.",
                url: "https://leetcode.com/problems/maximum-subarray/"
            },
            {
                id: 15,
                problem: "Cherry Pickup II",
                difficulty: "Hard",
                timeComplexity: "O(N⋅M²)",
                concept: "3D Grid DP, multi-agent state tracking.",
                url: "https://leetcode.com/problems/cherry-pickup-ii/"
            },
            {
                id: 16,
                problem: "Split Array Largest Sum",
                difficulty: "Hard",
                timeComplexity: "O(NlogS)",
                concept: "Binary Search on Answer (Min-Max Parametric Search).",
                url: "https://leetcode.com/problems/split-array-largest-sum/"
            },
            {
                id: 17,
                problem: "Sentence Similarity II",
                difficulty: "Med",
                timeComplexity: "O(N⋅α(N))",
                concept: "Union-Find vs. Transitive Closure DP.",
                url: "https://leetcode.com/problems/sentence-similarity-ii/"
            },
            {
                id: 18,
                problem: "Distinct Subsequences",
                difficulty: "Hard",
                timeComplexity: "O(MN)",
                concept: "String counting, non-greedy matching logic.",
                url: "https://leetcode.com/problems/distinct-subsequences/"
            },
            {
                id: 19,
                problem: "Partition Equal Subset Sum",
                difficulty: "Med",
                timeComplexity: "O(N⋅S)",
                concept: "0/1 Knapsack, Pseudo-polynomial time awareness.",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/"
            },
            {
                id: 20,
                problem: "Best Time to Buy/Sell Stock IV",
                difficulty: "Hard",
                timeComplexity: "O(NK)",
                concept: "General State Machine, edge case optimization (K>N/2).",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"
            }
        ]
    },
    trees: {
        id: 'trees',
        title: "Trees & Graphs",
        description: "Master hierarchical data structures and traversals",
        questions: [
            {
                id: 21,
                problem: "Binary Tree Level Order Traversal",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "BFS and Queue Management (Level-Size Snapshot).",
                url: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
            },
            {
                id: 22,
                problem: "Binary Tree Zigzag Level Order Traversal",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Conditional Deque Operations (Serpentine traversal).",
                url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
            },
            {
                id: 23,
                problem: "Binary Tree Right Side View",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Visual Projection, Reverse Preorder DFS.",
                url: "https://leetcode.com/problems/binary-tree-right-side-view/"
            },
            {
                id: 24,
                problem: "Flatten Binary Tree to Linked List",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "In-place Modification, Morris Traversal.",
                url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"
            },
            {
                id: 25,
                problem: "Populating Next Right Pointers in Each Node II",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Level Order Traversal with Constant Space (Zipper).",
                url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/"
            },
            {
                id: 26,
                problem: "Construct Binary Tree from Preorder and Inorder Traversal",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Divide and Conquer using Traversal Invariants.",
                url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
            },
            {
                id: 27,
                problem: "Serialize and Deserialize Binary Tree",
                difficulty: "Hard",
                timeComplexity: "O(N)",
                concept: "Protocol Design, Preorder with Sentinels.",
                url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
            },
            {
                id: 28,
                problem: "Validate Binary Search Tree",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Constraint Propagation (Top-Down).",
                url: "https://leetcode.com/problems/validate-binary-search-tree/"
            },
            {
                id: 29,
                problem: "Recover Binary Search Tree",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Inorder Traversal Properties, Anomaly Detection.",
                url: "https://leetcode.com/problems/recover-binary-search-tree/"
            },
            {
                id: 30,
                problem: "Delete Node in a BST",
                difficulty: "Med",
                timeComplexity: "O(H)",
                concept: "Structural Maintenance, Successor Replacement.",
                url: "https://leetcode.com/problems/delete-node-in-a-bst/"
            },
            {
                id: 31,
                problem: "Lowest Common Ancestor of a Binary Tree",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Post-Order Aggregation (Bottom-Up).",
                url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
            },
            {
                id: 32,
                problem: "Step-By-Step Directions From a Binary Tree Node to Another",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "LCA + Path Generation (Up/Down logic).",
                url: "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/"
            },
            {
                id: 33,
                problem: "All Nodes Distance K in Binary Tree",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Graph Conversion (Parent Pointers), BFS.",
                url: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/"
            },
            {
                id: 34,
                problem: "Path Sum III",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Prefix Sums on Trees.",
                url: "https://leetcode.com/problems/path-sum-iii/"
            },
            {
                id: 35,
                problem: "House Robber III",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "State Machine on Trees (Rob/Skip).",
                url: "https://leetcode.com/problems/house-robber-iii/"
            },
            {
                id: 36,
                problem: "Maximum Width of Binary Tree",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Binary Heap Indexing, BFS.",
                url: "https://leetcode.com/problems/maximum-width-of-binary-tree/"
            },
            {
                id: 37,
                problem: "Binary Tree Maximum Path Sum",
                difficulty: "Hard",
                timeComplexity: "O(N)",
                concept: "Kadane’s Algorithm on Trees (Global Max vs Local).",
                url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
            },
            {
                id: 38,
                problem: "Vertical Order Traversal of a Binary Tree",
                difficulty: "Hard",
                timeComplexity: "O(NlogN)",
                concept: "Coordinate Systems, Multi-Key Sorting.",
                url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"
            },
            {
                id: 39,
                problem: "Binary Tree Cameras",
                difficulty: "Hard",
                timeComplexity: "O(N)",
                concept: "Greedy Logic with Tri-State Return.",
                url: "https://leetcode.com/problems/binary-tree-cameras/"
            },
            {
                id: 40,
                problem: "Sum of Distances in Tree",
                difficulty: "Hard",
                timeComplexity: "O(N)",
                concept: "Re-rooting Technique (DP on Trees).",
                url: "https://leetcode.com/problems/sum-of-distances-in-tree/"
            }
        ]
    }
};
