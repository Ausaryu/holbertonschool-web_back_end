#!/usr/bin/env python3
'''
Mixed list summation module.
'''

import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    '''
    Returns the sum of a list of integers and floats as a float.
    '''
    result = 0
    for num in mxd_lst:
        result += num
    return float(result)
