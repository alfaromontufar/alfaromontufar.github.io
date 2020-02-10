import numpy as np
import math
import sys

sys.setrecursionlimit(10000)

finished = False
w = 1001

cells = np.zeros((w,w))

cells[int(w/2)][int(w/2)] = 100000

def toppling_recursion(i,j):
	if (cells[i][j] > 3 and cells[i][j] < 100) :
		sand = math.floor(cells[i][j]/4)*4
		cells[i][j] = cells[i][j] - sand
		if ( i > 0 ) :
			cells[i-1][j] = cells[i-1][j] + sand/4
			toppling_recursion(i-1,j)
		if ( j > 0 ) :
			cells[i][j-1] = cells[i][j-1] + sand/4
			toppling_recursion(i,j-1)
		if ( i < w - 1 ):
			cells[i+1][j] = cells[i+1][j] + sand/4
			toppling_recursion(i+1,j)
		if ( j < w - 1 ):
			cells[i][j+1] = cells[i][j+1] + sand/4
			toppling_recursion(i,j+1)

def toppling_list(i,j):
	l = [(i,j)]
	while len(l) > 0:
		pair = l.pop(0)
		sand = math.floor(cells[pair[0]][pair[1]]/4)*4
		if ( pair[0] > 0 ) :
			cells[pair[0]-1][pair[1]] = cells[pair[0]-1][pair[1]] + sand/4
			if cells[pair[0]-1][pair[1]] > 3:
				l.append((pair[0]-1,pair[1]))
		if ( pair[1] > 0 ) :
			cells[pair[0]][pair[1]-1] = cells[pair[0]][pair[1]-1] + sand/4
			if cells[pair[0]][pair[1]-1] > 3:
				l.append((pair[0],pair[1]-1))
		if ( pair[0] < w - 1 ):
			cells[pair[0]+1][pair[1]] = cells[pair[0]+1][pair[1]] + sand/4
			if cells[pair[0]+1][pair[1]] > 3:
				l.append((pair[0]+1,pair[1]))
		if ( pair[1] < w - 1 ):
			cells[pair[0]][pair[1]+1] = cells[pair[0]][pair[1]+1] + sand/4
			if cells[pair[0]][pair[1]+1] > 3:
				l.append((pair[0],pair[1]+1))

def toppling(i,j):  #toppling with no recursion
	sand = math.floor(cells[i][j]/4)*4
	cells[i][j] = cells[i][j] - sand
	if ( i > 0 ) :
		cells[i-1][j] = cells[i-1][j] + sand/4
	if ( j > 0 ) :
		cells[i][j-1] = cells[i][j-1] + sand/4
	if ( i < w - 1 ):
		cells[i+1][j] = cells[i+1][j] + sand/4
	if ( j < w - 1 ):
		cells[i][j+1] = cells[i][j+1] + sand/4

def topple():
	global finished,cells,w
	while finished == False:
		toppled = False
		for i in range(w):
			for j in range(w):
				if (cells[i][j] > 3) :
					toppling_list(i,j)
					toppled = True
					break
			if (toppled == True):
				break
		if (toppled == False):
			finished = True
	
def printmatrix():
	for i in range(w):
		for j in range(w):
			print str(int(cells[i][j])) + ' ' ,
		print ''

def tostr():
	s = '['
	for i in range(w):
		s = s + '['
		for j in range(w):
			s = s + str(int(cells[i][j]))
			if j == w - 1:
				s = s + ']'
			else:
				s = s + ','
		if i == w - 1:
			s = s + ']'
		else:
			s = s + ','
	s = s + ']'
	return s
	
topple()
with open('output.txt', 'w') as file:
    file.write(tostr())

