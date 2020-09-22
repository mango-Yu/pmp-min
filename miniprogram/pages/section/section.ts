
Component({
    data: {
        treeList: {
            text: '第一单元',
            id: 0,
            nodes: [
                {
                    text: '理财入门之基本经济指标与经济学原理',
                    id: 1,
                    nodes: [
                        {
                            text: '正确理解理财之理财就是理生活',
                            id: 2,
                            nodes: [
                                {
                                    text: '现金规划管理（上）',
                                    id: 3,
                                },
                                {
                                    text: '现金规划管理 （下）',
                                    id: 4,
                                },
                            ]
                        },
                        {
                            text: 'Child 2',
                            id: 5,
                        }
                    ]
                },
                {
                    text: 'Parent 2',
                    id: 6,
                    nodes: [
                        {
                            text: 'Child 1',
                            id: 7,
                        },
                        {
                            text: 'Child 2',
                            id: 8,
                        }
                    ]
                }
            ]
        }
    }
})

