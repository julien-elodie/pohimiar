import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import red from '@material-ui/core/colors/red';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    width: '25%',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    width: '75%',
    paddingLeft: theme.spacing.unit,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  column: {
    flexBasis: '25%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  details: {
    alignItems: 'center',
    padding: `0 ${theme.spacing.unit / 2}px`,
  },
  panelListContainer: {
    padding: 0,
  },
  panelListIcon: {
    width: 24,
    height: 24,
    margin: 8,
    color: red[500],
  },
  panelList: {
    width: '100%',
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'auto',
  },
  panelListItem: {
    width: 'auto',
    float: 'left',
    padding: `0 ${theme.spacing.unit / 2}px`,
  },
  chip: {

  },
  listCard: {
    // width: 320,
    width: 256,
    margin: `${theme.spacing.unit}px 0`,
  },
  listCardAvatar: {
    backgroundColor: red[500],
  },
  listCardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    // paddingTop: '177.78%', // 9:16
  },
  listCardActions: {
    //display: 'flex',
  },
  listCardIconButton: {
    //flexBasis: '33.33%',
    margin: `0 14.67px`
  },
});

class Pages extends React.Component {
  state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Figure</Typography>
            <Typography noWrap className={classes.secondaryHeading}>
              <a href='/'>News about this plate.</a>
            </Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.panelListContainer}>
            <WhatshotIcon className={classes.panelListIcon}/>
            <List className={classes.panelList}>
              {
                ['Bilibili', 'Acfun', 'Youtube', 'CCTV'].map((text, index) => (
                  <ListItem className={classes.panelListItem}>
                    <Chip
                      avatar={<Avatar alt={text} src="">{text[0]}</Avatar>}
                      label={text}
                      className={classes.chip}
                      onClick={() => {}}
                    />
                  </ListItem>
                ))
              }
            </List>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelDetails className={classes.details}>
            <List className={classes.panelList}>
              {
                [
                  {
                    text: 'Bilibili',
                    time: '1234.05.06(78)',
                    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/330px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg',
                  },
                  {
                    text: 'Acfun',
                    time: '1234.05.06(78)',
                    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/330px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg',
                  },
                  {
                    text: 'Youtube',
                    time: '1234.05.06(78)',
                    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/330px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg',
                  },
                  {
                    text: 'CCTV',
                    time: '1234.05.06(78)',
                    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/330px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg',
                  },].map(data => (
                  <ListItem className={classes.panelListItem}>
                    <Card className={classes.listCard}>
                      <CardHeader
                        avatar={
                          <Avatar aria-label={data.text} className={classes.listCardAvatar}>
                            {data.text[0]}
                          </Avatar>
                        }
                        action={
                          <IconButton>
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={data.text}
                        subheader={data.time}
                      />
                      <CardMedia
                        className={classes.listCardMedia}
                        image={data.mediaUrl}
                        title={data.text}
                      />
                      <CardActions className={classes.listCardActions} disableActionSpacing>
                        <IconButton className={classes.listCardIconButton} aria-label="Add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton className={classes.listCardIconButton} aria-label="Share">
                          <ShareIcon />
                        </IconButton>
                        <IconButton className={classes.listCardIconButton} aria-label="View">
                          <SearchIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </ListItem>
                ))
              }
            </List>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small" color="primary">
              More
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Location</Typography>
            <Typography noWrap className={classes.secondaryHeading}>Select trip destination</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <div className={classes.column}>
              <Chip label="Barbados" className={classes.chip} onDelete={() => {}} />
            </div>
            <div className={classNames(classes.column, classes.helper)}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
                <a href="#sub-labels-and-columns" className={classes.link}>
                  Learn more
                </a>
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Location</Typography>
            <Typography noWrap className={classes.secondaryHeading}>Select trip destination</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <div className={classes.column}>
              <Chip label="Barbados" className={classes.chip} onDelete={() => {}} />
            </div>
            <div className={classNames(classes.column, classes.helper)}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
                <a href="#sub-labels-and-columns" className={classes.link}>
                  Learn more
                </a>
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Location</Typography>
            <Typography noWrap className={classes.secondaryHeading}>Select trip destination</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <div className={classes.column}>
              <Chip label="Barbados" className={classes.chip} onDelete={() => {}} />
            </div>
            <div className={classNames(classes.column, classes.helper)}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
                <a href="#sub-labels-and-columns" className={classes.link}>
                  Learn more
                </a>
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pages);