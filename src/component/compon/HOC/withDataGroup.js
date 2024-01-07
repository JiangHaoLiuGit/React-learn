import React from 'react';
import props from '../../../utils/commonTypes';

export default function widthDataGroup(Comp){
    return class GroupWrapper extends React.Component{
        static defaultProps = {
            datas: []
        }
        static propTypes = {
            datas:props.groupDatas
        }
        render(){
            let ds = this.props.datas.map(it => <Comp infos={it} {...this.props} key={it.value}/>)
            return <>
                {ds}
            </>
        }
    }
}