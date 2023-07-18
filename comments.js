// Create web server

// Import express
const express = require('express');

// Import router
const router = express.Router();

// Import multer
const multer = require('multer');

// Import config
const config = require('../config/config.json');

// Import comment model
const Comment = require('../models/comment.model');

// Import user model
const User = require('../models/user.model');

// Import post model
const Post = require('../models/post.model');

// Import verify token
const verifyToken = require('../middlewares/verifyToken');

// Import verify admin
const verifyAdmin = require('../middlewares/verifyAdmin');

// Import verify user
const verifyUser = require('../middlewares/verifyUser');

// Import verify user
const verifyUserOrAdmin = require('../middlewares/verifyUserOrAdmin');

// Import verify user
const verifyUserOrAdminOrModerator = require('../middlewares/verifyUserOrAdminOrModerator');

// Import verify moderator
const verifyModerator = require('../middlewares/verifyModerator');

// Import verify moderator
const verifyModeratorOrAdmin = require('../middlewares/verifyModeratorOrAdmin');

// Import verify moderator
const verifyModeratorOrAdminOrUser = require('../middlewares/verifyModeratorOrAdminOrUser');

// Import verify moderator
const verifyModeratorOrAdminOrUserOrGuest = require('../middlewares/verifyModeratorOrAdminOrUserOrGuest');

// Import verify moderator
const verifyModeratorOrAdminOrUserOrGuestOrBanned = require('../middlewares/verifyModeratorOrAdminOrUserOrGuestOrBanned');

// Import verify moderator
const verifyModeratorOrAdminOrUserOrGuestOrBannedOrSuspended = require('../middlewares/verifyModeratorOrAdminOrUserOrGuestOrBannedOrSuspended');

// Import verify moderator
const verifyModeratorOrAdminOrUserOrGuestOrBannedOrSuspendedOrInactive = require('../middlewares/verifyModeratorOrAdminOrUserOrGuestOrBannedOrSuspendedOrInactive');

// Import verify moderator
const verifyModeratorOrAdminOrUserOrGuestOrBannedOrSuspendedOrInactiveOrBlocked = require('../middlewares/verifyModeratorOrAdminOrUserOrGuestOrBannedOrSuspendedOrInactiveOrBlocked');

// Import verify moderator
const verifyModeratorOrAdminOrUserOrGuestOrBannedOrSuspendedOrInactiveOrBlockedOrPending = require('../middlewares/verifyModeratorOrAdminOrUserOrGuestOrBannedOrSuspended