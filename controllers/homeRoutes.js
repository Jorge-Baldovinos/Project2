const router = require('express').Router();
const { User, Routine } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      res.render('homepage', {
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/signUp', async (req, res) => {
      try {
        res.render('signUp');
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.get('/profile',  async (req, res) => {
  try {
    /* const userData = await User.findByPK(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Routine }],
    });

    const user = userData.get({ plain: true}); */
    
    res.render('profile');
  } catch (err) {
    res.status(500).json(err);
  }
    });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');     
});  
//   router.get('/profile', withAuth, async (req, res) => {
//     try {
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{ model: Project }],
//       });
  
//       const user = userData.get({ plain: true });
  
//       res.render('profile', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//       res.redirect('/profile');
//       return;
//     }
  
//     res.render('login');
//   });
  
  module.exports = router;