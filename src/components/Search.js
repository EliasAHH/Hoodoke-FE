import React from 'react'
import { connect } from 'react-redux'
import { searchThis } from '../Redux/actioncreator'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


class Find extends React.Component {
  state = {
    searchTerm: ""
  }

  handleSearchChange = (e, { value }) => {
    console.log(value)
    this.props.searchThis(value)
  }


  render(){
    return (<div>
       <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
    </div>
    )
  }
}

export default connect(null,{ searchThis })(Find)
