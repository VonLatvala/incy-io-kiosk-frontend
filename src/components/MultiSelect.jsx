import React from "react";
import { array, func } from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const buttonStyle = (isSelected) => ({
    width: '90%',
    backgroundColor: isSelected ? '#4cb4ff' : '#0496FF',
    minHeight: 100,
    height: '100%',
    borderRadius: 30,
    margin: 'auto',
    overflowWrap: 'break-word',
});

const textStyle = {

    fontSize: 35,
    color: '#ffffff',
    fontWeight: 'bold',
};

class MultiSelect extends React.Component {
    handleChoice = (choice) => {
        const { selectedChoices, setSelectedChoices } = this.props;
        const selectedChoiceIds = selectedChoices.map(choice => choice.id);

        let newSelectedChoices;

        if (selectedChoiceIds.includes(choice.id)) {
            newSelectedChoices = selectedChoices.filter(c => c.id !== choice.id);
        } else {
            newSelectedChoices = [...selectedChoices, choice];
        }

        setSelectedChoices(newSelectedChoices);
    }

    render() {
        const selectedChoiceIds = this.props.selectedChoices.map(selection => selection.id);

        return this.props.currentChoices.map(choice => {
            const isSelected = selectedChoiceIds.includes(choice.id);
            return (
                <Grid item xs={12} sm={6} xl={3} key={choice.id}>
                    <Button
                        variant={isSelected ? 'contained' : 'text'}
                        style={buttonStyle(isSelected)}
                        onClick={() => this.handleChoice(choice)}
                    >
                        <Typography style={textStyle}>{choice.name}</Typography>
                    </Button>
                </Grid>
            );
        });
    }
}

MultiSelect.propTypes = {
    currentChoices: array.isRequired,
    selectedChoices: array.isRequired,
    setSelectedChoices: func.isRequired,
};

export default MultiSelect;
