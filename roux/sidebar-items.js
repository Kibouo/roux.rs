initSidebarItems({"mod":[["subreddit","Subreddit module. # Subreddit A read-only module to read data from a specific subreddit. # Usage `rust,no_run use roux::Subreddit; let subreddit = Subreddit::new(\"subreddt_name\"); // Now you are able to: // Get moderators. let moderators = subreddit.moderators(); // Get hot posts with limit = 25. let hot = subreddit.hot(25); // Get rising posts with limit = 30. let rising = subreddit.rising(30); // Get top posts with limi = 10. let top = subreddit.top(10); `"],["user","User module. # User A read-only module to read data from for a specific user. # Usage `rust,no_run use roux::User; let user = User::new(\"user_name\"); // Now you are able to: // Get overview let overview = user.overview(); // Get submitted posts. let submitted = user.submitted(); // Get comments. let comments = user.comments(); `"]],"struct":[["Reddit","Client to use OAuth with Reddit."]]});