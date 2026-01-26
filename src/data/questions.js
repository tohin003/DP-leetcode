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
                problem: "Longest Common Subsequence",
                difficulty: "Med",
                timeComplexity: "O(MN)",
                concept: "2D Grid DP, String Matching.",
                url: "https://leetcode.com/problems/longest-common-subsequence/"
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
                problem: "Unique Paths",
                difficulty: "Med",
                timeComplexity: "O(M⋅N)",
                concept: "Fundamental Grid DP.",
                url: "https://leetcode.com/problems/unique-paths/"
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
                problem: "Decode Ways",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "1D DP, String Partitioning.",
                url: "https://leetcode.com/problems/decode-ways/"
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
                problem: "Maximum Subarray",
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
                problem: "House Robber II",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Circular DP (Break circle into two linear problems).",
                url: "https://leetcode.com/problems/house-robber-ii/"
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
    },
    graphs: {
        id: 'graphs',
        title: "Graphs & Advanced",
        description: "Conquer Graph Theory, Heaps, and Tries",
        questions: [
            {
                id: 41,
                problem: "Number of Islands",
                difficulty: "Med",
                timeComplexity: "O(M⋅N)",
                concept: "Grid DFS/BFS, Connected Components.",
                url: "https://leetcode.com/problems/number-of-islands/"
            },
            {
                id: 42,
                problem: "Rotting Oranges",
                difficulty: "Med",
                timeComplexity: "O(M⋅N)",
                concept: "Multi-Source BFS, Shortest Path in Grid.",
                url: "https://leetcode.com/problems/rotting-oranges/"
            },
            {
                id: 43,
                problem: "Clone Graph",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "DFS/BFS with Hash Map for deep copy.",
                url: "https://leetcode.com/problems/clone-graph/"
            },
            {
                id: 44,
                problem: "Pacific Atlantic Water Flow",
                difficulty: "Med",
                timeComplexity: "O(M⋅N)",
                concept: "DFS/BFS from boundaries (Reverse Flow).",
                url: "https://leetcode.com/problems/pacific-atlantic-water-flow/"
            },
            {
                id: 45,
                problem: "Course Schedule",
                difficulty: "Med",
                timeComplexity: "O(V+E)",
                concept: "Topological Sort (Kahn's or DFS), Cycle Detection.",
                url: "https://leetcode.com/problems/course-schedule/"
            },
            {
                id: 46,
                problem: "Course Schedule II",
                difficulty: "Med",
                timeComplexity: "O(V+E)",
                concept: "Topological Sort, Ordering generation.",
                url: "https://leetcode.com/problems/course-schedule-ii/"
            },
            {
                id: 47,
                problem: "Number of Provinces",
                difficulty: "Med",
                timeComplexity: "O(V²)",
                concept: "Union-Find or DFS, Connected Components.",
                url: "https://leetcode.com/problems/number-of-provinces/"
            },
            {
                id: 48,
                problem: "Redundant Connection",
                difficulty: "Med",
                timeComplexity: "O(N⋅α(N))",
                concept: "Union-Find (Cycle Detection in undirected graph).",
                url: "https://leetcode.com/problems/redundant-connection/"
            },
            {
                id: 49,
                problem: "Accounts Merge",
                difficulty: "Med",
                timeComplexity: "O(N⋅α(N))",
                concept: "Union-Find on emails, Component Grouping.",
                url: "https://leetcode.com/problems/accounts-merge/"
            },
            {
                id: 50,
                problem: "Network Delay Time",
                difficulty: "Med",
                timeComplexity: "O(ElogV)",
                concept: "Dijkstra's Algorithm (Shortest Path).",
                url: "https://leetcode.com/problems/network-delay-time/"
            },
            {
                id: 51,
                problem: "Cheapest Flights Within K Stops",
                difficulty: "Med",
                timeComplexity: "O(K⋅E)",
                concept: "Bellman-Ford or Dijkstra with state.",
                url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
            },
            {
                id: 52,
                problem: "Word Ladder",
                difficulty: "Hard",
                timeComplexity: "O(M²⋅N)",
                concept: "BFS for Shortest Path in unweighted graph.",
                url: "https://leetcode.com/problems/word-ladder/"
            },
            {
                id: 53,
                problem: "Longest Increasing Path in a Matrix",
                difficulty: "Hard",
                timeComplexity: "O(M⋅N)",
                concept: "DFS + Memoization (DP on Grid).",
                url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"
            },
            {
                id: 54,
                problem: "Kth Largest Element in an Array",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "QuickSelect or Min-Heap.",
                url: "https://leetcode.com/problems/kth-largest-element-in-an-array/"
            },
            {
                id: 55,
                problem: "Top K Frequent Elements",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Bucket Sort or Min-Heap.",
                url: "https://leetcode.com/problems/top-k-frequent-elements/"
            },
            {
                id: 56,
                problem: "Find Median from Data Stream",
                difficulty: "Hard",
                timeComplexity: "O(logN)",
                concept: "Two Heaps (Min-Heap + Max-Heap balancing).",
                url: "https://leetcode.com/problems/find-median-from-data-stream/"
            },
            {
                id: 57,
                problem: "Merge k Sorted Lists",
                difficulty: "Hard",
                timeComplexity: "O(NlogK)",
                concept: "Min-Heap (Priority Queue).",
                url: "https://leetcode.com/problems/merge-k-sorted-lists/"
            },
            {
                id: 58,
                problem: "Implement Trie (Prefix Tree)",
                difficulty: "Med",
                timeComplexity: "O(L)",
                concept: "Trie Construction & Search.",
                url: "https://leetcode.com/problems/implement-trie-prefix-tree/"
            },
            {
                id: 59,
                problem: "Design Add and Search Words Data Structure",
                difficulty: "Med",
                timeComplexity: "O(M)",
                concept: "Trie with Backtracking (Wildcard .).",
                url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
            },
            {
                id: 60,
                problem: "Word Search II",
                difficulty: "Hard",
                timeComplexity: "O(M⋅N⋅4^L)",
                concept: "Trie + DFS/Backtracking on Grid.",
                url: "https://leetcode.com/problems/word-search-ii/"
            }
        ]
    },
    arrays: {
        id: 'arrays',
        title: "Arrays & Strings",
        description: "Sliding Window, Two Pointers, and Hashing",
        questions: [
            {
                id: 61,
                problem: "3Sum",
                difficulty: "Med",
                timeComplexity: "O(N²)",
                concept: "Two Pointers, sorting to avoid duplicates.",
                url: "https://leetcode.com/problems/3sum/"
            },
            {
                id: 62,
                problem: "Container With Most Water",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Two Pointers (Greedy shrinkage).",
                url: "https://leetcode.com/problems/container-with-most-water/"
            },
            {
                id: 63,
                problem: "Longest Substring Without Repeating Characters",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Sliding Window with Hash Map/Set.",
                url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
            },
            {
                id: 64,
                problem: "Product of Array Except Self",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Prefix and Suffix arrays (or O(1) space opt).",
                url: "https://leetcode.com/problems/product-of-array-except-self/"
            },
            {
                id: 65,
                problem: "Group Anagrams",
                difficulty: "Med",
                timeComplexity: "O(N⋅K)",
                concept: "Hashing with sorted string key.",
                url: "https://leetcode.com/problems/group-anagrams/"
            },
            {
                id: 66,
                problem: "Subarray Sum Equals K",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Prefix Sum + Hash Map.",
                url: "https://leetcode.com/problems/subarray-sum-equals-k/"
            },
            {
                id: 67,
                problem: "Longest Palindromic Substring",
                difficulty: "Med",
                timeComplexity: "O(N²)",
                concept: "Expand Around Center.",
                url: "https://leetcode.com/problems/longest-palindromic-substring/"
            },
            {
                id: 68,
                problem: "Next Permutation",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Array Manipulation, finding swap point.",
                url: "https://leetcode.com/problems/next-permutation/"
            },
            {
                id: 69,
                problem: "Set Matrix Zeroes",
                difficulty: "Med",
                timeComplexity: "O(M⋅N)",
                concept: "In-place Matrix modification using first row/col.",
                url: "https://leetcode.com/problems/set-matrix-zeroes/"
            },
            {
                id: 70,
                problem: "Rotate Image",
                difficulty: "Med",
                timeComplexity: "O(M⋅N)",
                concept: "Matrix Transpose + Reflect.",
                url: "https://leetcode.com/problems/rotate-image/"
            }
        ]
    },
    stack: {
        id: 'stack',
        title: "Recursion & Stack",
        description: "Backtracking, Monotonic Stacks, and divide & conquer",
        questions: [
            {
                id: 71,
                problem: "Subsets II",
                difficulty: "Med",
                timeComplexity: "O(2^N)",
                concept: "Backtracking with duplicate handling.",
                url: "https://leetcode.com/problems/subsets-ii/"
            },
            {
                id: 72,
                problem: "Combination Sum",
                difficulty: "Med",
                timeComplexity: "O(2^N)",
                concept: "Backtracking with reuse of elements.",
                url: "https://leetcode.com/problems/combination-sum/"
            },
            {
                id: 73,
                problem: "Letter Combinations of a Phone Number",
                difficulty: "Med",
                timeComplexity: "O(4^N)",
                concept: "Backtracking / DFS.",
                url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
            },
            {
                id: 74,
                problem: "Palindrome Partitioning",
                difficulty: "Med",
                timeComplexity: "O(N⋅2^N)",
                concept: "Backtracking + Palindrome Check.",
                url: "https://leetcode.com/problems/palindrome-partitioning/"
            },
            {
                id: 75,
                problem: "Word Search",
                difficulty: "Med",
                timeComplexity: "O(MN⋅3^L)",
                concept: "DFS/Backtracking on Grid.",
                url: "https://leetcode.com/problems/word-search/"
            },
            {
                id: 76,
                problem: "Valid Parentheses",
                difficulty: "Easy",
                timeComplexity: "O(N)",
                concept: "Basic Stack usage.",
                url: "https://leetcode.com/problems/valid-parentheses/"
            },
            {
                id: 77,
                problem: "Daily Temperatures",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Monotonic Stack (decreasing).",
                url: "https://leetcode.com/problems/daily-temperatures/"
            },
            {
                id: 78,
                problem: "Min Stack",
                difficulty: "Med",
                timeComplexity: "O(1)",
                concept: "Stack Design with auxiliary stack.",
                url: "https://leetcode.com/problems/min-stack/"
            },
            {
                id: 79,
                problem: "Largest Rectangle in Histogram",
                difficulty: "Hard",
                timeComplexity: "O(N)",
                concept: "Monotonic Stack (increasing).",
                url: "https://leetcode.com/problems/largest-rectangle-in-histogram/"
            },
            {
                id: 80,
                problem: "LRU Cache",
                difficulty: "Med",
                timeComplexity: "O(1)",
                concept: "Doubly Linked List + Hash Map.",
                url: "https://leetcode.com/problems/lru-cache/"
            }
        ]
    },
    greedy: {
        id: 'greedy',
        title: "Greedy & Intervals",
        description: "Interval Scheduling and Greedy Strategies",
        questions: [
            {
                id: 81,
                problem: "Merge Intervals",
                difficulty: "Med",
                timeComplexity: "O(NlogN)",
                concept: "Sorting + Merging overlaps.",
                url: "https://leetcode.com/problems/merge-intervals/"
            },
            {
                id: 82,
                problem: "Insert Interval",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Interval logic without re-sorting.",
                url: "https://leetcode.com/problems/insert-interval/"
            },
            {
                id: 83,
                problem: "Non-overlapping Intervals",
                difficulty: "Med",
                timeComplexity: "O(NlogN)",
                concept: "Greedy (sort by end time).",
                url: "https://leetcode.com/problems/non-overlapping-intervals/"
            },
            {
                id: 84,
                problem: "Jump Game",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Greedy (tracking max reach).",
                url: "https://leetcode.com/problems/jump-game/"
            },
            {
                id: 85,
                problem: "Jump Game II",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Greedy (BFS-like range update).",
                url: "https://leetcode.com/problems/jump-game-ii/"
            },
            {
                id: 86,
                problem: "Gas Station",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Greedy (total sum vs current sum).",
                url: "https://leetcode.com/problems/gas-station/"
            },
            {
                id: 87,
                problem: "Candy",
                difficulty: "Hard",
                timeComplexity: "O(N)",
                concept: "Two-pass Greedy (Left-to-Right, Right-to-Left).",
                url: "https://leetcode.com/problems/candy/"
            },
            {
                id: 88,
                problem: "Single Number",
                difficulty: "Easy",
                timeComplexity: "O(N)",
                concept: "Bit Manipulation (XOR properties).",
                url: "https://leetcode.com/problems/single-number/"
            },
            {
                id: 89,
                problem: "Majority Element",
                difficulty: "Easy",
                timeComplexity: "O(N)",
                concept: "Boyer-Moore Voting Algorithm.",
                url: "https://leetcode.com/problems/majority-element/"
            },
            {
                id: 90,
                problem: "Partition Labels",
                difficulty: "Med",
                timeComplexity: "O(N)",
                concept: "Greedy Two Pointers (Last occurrence).",
                url: "https://leetcode.com/problems/partition-labels/"
            }
        ]
    },
    advanced: {
        id: 'advanced',
        title: "Advanced DP + Graph",
        description: "Elite interview problems combining Dynamic Programming with Graph Theory",
        questions: [
            {
                id: 91,
                problem: "Shortest Path in a Grid with Obstacles Elimination",
                difficulty: "Hard",
                timeComplexity: "O(M⋅N⋅K)",
                concept: "BFS + State Tracking (3D state: row, col, remaining eliminations).",
                url: "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/"
            },
            {
                id: 92,
                problem: "Minimum Cost to Make at Least One Valid Path in a Grid",
                difficulty: "Hard",
                timeComplexity: "O(M⋅N)",
                concept: "0-1 BFS with Deque (Path costs 0 or 1).",
                url: "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/"
            },
            {
                id: 93,
                problem: "Frog Jump",
                difficulty: "Hard",
                timeComplexity: "O(N²)",
                concept: "DP with state as (stone, last jump size).",
                url: "https://leetcode.com/problems/frog-jump/"
            },
            {
                id: 94,
                problem: "Critical Connections in a Network",
                difficulty: "Hard",
                timeComplexity: "O(V+E)",
                concept: "Tarjan's Algorithm for Bridges.",
                url: "https://leetcode.com/problems/critical-connections-in-a-network/"
            },
            {
                id: 95,
                problem: "Swim in Rising Water",
                difficulty: "Hard",
                timeComplexity: "O(N²logN)",
                concept: "Binary Search + BFS or Dijkstra on Grid.",
                url: "https://leetcode.com/problems/swim-in-rising-water/"
            },
            {
                id: 96,
                problem: "Shortest Path Visiting All Nodes",
                difficulty: "Hard",
                timeComplexity: "O(2^N⋅N²)",
                concept: "BFS + Bitmask DP (Traveling Salesman variant).",
                url: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/"
            },
            {
                id: 97,
                problem: "Minimum Number of Days to Eat N Oranges",
                difficulty: "Hard",
                timeComplexity: "O(logN)",
                concept: "BFS/Memoization with state reduction.",
                url: "https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/"
            },
            {
                id: 98,
                problem: "Parallel Courses II",
                difficulty: "Hard",
                timeComplexity: "O(3^N)",
                concept: "Bitmask DP + Subset Enumeration.",
                url: "https://leetcode.com/problems/parallel-courses-ii/"
            },
            {
                id: 99,
                problem: "Shortest Path to Get All Keys",
                difficulty: "Hard",
                timeComplexity: "O(M⋅N⋅2^K)",
                concept: "BFS + Bitmask for key collection.",
                url: "https://leetcode.com/problems/shortest-path-to-get-all-keys/"
            },
            {
                id: 100,
                problem: "Number of Ways to Arrive at Destination",
                difficulty: "Med",
                timeComplexity: "O(ElogV)",
                concept: "Dijkstra + Count shortest paths (DP on graph).",
                url: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
            },
            {
                id: 101,
                problem: "Reconstruct Itinerary",
                difficulty: "Hard",
                timeComplexity: "O(ElogE)",
                concept: "Hierholzer's Algorithm (Eulerian Path).",
                url: "https://leetcode.com/problems/reconstruct-itinerary/"
            },
            {
                id: 102,
                problem: "Path With Minimum Effort",
                difficulty: "Med",
                timeComplexity: "O(M⋅N⋅log(MaxDiff))",
                concept: "Binary Search + BFS or Dijkstra.",
                url: "https://leetcode.com/problems/path-with-minimum-effort/"
            },
            {
                id: 103,
                problem: "Minimum Cost to Connect All Points",
                difficulty: "Med",
                timeComplexity: "O(N²logN)",
                concept: "Prim's or Kruskal's MST Algorithm.",
                url: "https://leetcode.com/problems/minimum-cost-to-connect-all-points/"
            },
            {
                id: 104,
                problem: "Find the Shortest Superstring",
                difficulty: "Hard",
                timeComplexity: "O(N²⋅2^N)",
                concept: "TSP with Bitmask DP + String overlap.",
                url: "https://leetcode.com/problems/find-the-shortest-superstring/"
            },
            {
                id: 105,
                problem: "Cat and Mouse",
                difficulty: "Hard",
                timeComplexity: "O(N³)",
                concept: "Game Theory DP on Graph (Minimax with states).",
                url: "https://leetcode.com/problems/cat-and-mouse/"
            }
        ]
    }
};
