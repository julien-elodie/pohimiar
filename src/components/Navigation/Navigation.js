import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import logo from '../App/image/logo.svg';

import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import classNames from 'classnames';
import red from '@material-ui/core/colors/red';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Pages from '../Pages/Pages';

const drawerWidth = 256;

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: -12,
    [theme.breakpoints.up('sm')]: {
      marginLeft: -8,
    },
  },
  logo: {
    height: 48,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginRight: theme.spacing.unit * 6,
    minWidth: 97,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: '50%',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 5,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  buttonContainer: {
    marginTop: 8,
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 10 - 5,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 10 - 5,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  newsList: {
    marginTop: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  newsListOpen: {
    width: `calc(${drawerWidth}px - 124px)`,
  },
  newsListClose: {
    width: 68,
  },
  newsItem: {
    padding: 0,
    height: 64,
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
  },
  addNewPaper: {
    margin: theme.spacing.unit,
    borderRadius: 28,
  },
  addNewPaperOpen: {
    width: 120,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  addNewPaperClose: {
    width: 56,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paperContainer: {
    paddingTop: 24,
    paddingLeft: 24,
    width: 56,
    height: 56,
  },
  paperContainerOpen: {
    width: 120,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paperContainerClose: {
    width: 56,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  addNew: {
    margin: -24,
    width: 56,
    height: 56,
    color: red[500],
    backgroundColor: '#fff',
    float: 'left',
  },
  news: {
    color: red[500],
    marginTop: -40,
    marginLeft: 54,
    fontSize: 18,
    position: 'absolute',
    width: 48,
  },
  newsOpen: {
    display: 'block',
  },
  newsClose: {
    display: 'none',
  },
  list: {
    
  },
  listOpen: {
    width: `calc(${drawerWidth}px - 16px)`,
  },
  listClose:{
    width: 55,
  },
  item: {
    paddingRight: 0,
    paddingLeft: theme.spacing.unit,
    paddingTop: 2,
    paddingBottom: 2,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  itemButton: {
    width: 32,
    height: 32,
    marginLeft: 12,
  },
  itemIcon: {
    margin: -12,
    width: 32,
    height: 32,
    color: red[500],
    backgroundColor: '#fff',
  },
  itemText: {
    marginLeft: -20,
  },
  itemTextOpen: {
    display: 'block'
  },
  itemTextClose: {
    display: 'none',
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 8,
  },
});

class Navigation extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    open: false,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    // const { classes, theme } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <IconButton color="inherit">
            <AccountCircle/>
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <IconButton color="inherit">
            <AccountCircle/>
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} className={classes.logo} alt="logo" />
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              POHIMIAR
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div className={classes.buttonContainer}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </div>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
                className={classes.avatarButton}
              >
                <Avatar className={classes.avatar}>P</Avatar>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <Avatar className={classes.avatar}>P</Avatar>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        <Drawer
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          variant="permanent"
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar} />
          <List className={classNames(classes.newsList, {
              [classes.newsListOpen]: this.state.open,
              [classes.newsListClose]: !this.state.open,
            })}
          >
            <ListItem
              button
              className={classes.newsItem}
            >
              <Paper
                elevation={4}
                className={classNames(classes.addNewPaper, {
                  [classes.addNewPaperOpen]: this.state.open,
                  [classes.addNewPaperClose]: !this.state.open,
                })}
              >
                <div
                  className={classNames(classes.paperContainer, {
                    [classes.paperContainerOpen]: this.state.open,
                    [classes.paperContainerClose]: !this.state.open,
                  })}
                >
                  <Avatar className={classes.addNew}>N</Avatar> 
                </div>
                <Typography
                  noWrap
                  className={classNames(classes.news, {
                    [classes.newsOpen]: this.state.open,
                    [classes.newsClose]: !this.state.open,
                  })}
                >
                  News
                </Typography>
              </Paper>
            </ListItem>
          </List>
          <List className={classNames(classes.list, {
              [classes.listOpen]: this.state.open,
              [classes.listClose]: !this.state.open,
            })}
          >
            {['Politcal', 'History', 'Military', 'Art'].map((text, index) => (
              <ListItem
                button
                key={text}
                className={classes.item}
              >
                <ListItemIcon>
                  {
                    <IconButton
                      color="inherit"
                      className={classes.itemButton}
                    >
                      <Avatar className={classes.itemIcon}>{text[0]}</Avatar>
                    </IconButton>
                  }
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  className={classNames(classes.itemText, {
                    [classes.itemTextOpen]: this.state.open,
                    [classes.itemTextClose]: !this.state.open,
                  })}
                />
              </ListItem>
            ))}
          </List>
          <Divider/>
        </Drawer>
        <main className={classes.content}>
          <div>
            123
          </div>
        </main>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navigation);